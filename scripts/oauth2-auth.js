import crypto from "node:crypto";
import http from "node:http";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const CLIENT_ID = "P4ILzpN0rUcv9zihBU0PK6nJD2r_NrU99RK-eUasYRfKoSssgP";
const CLIENT_SECRET = "Aqr0utvZs5v4Q6EVhSOLQLZII3M9C3rzAQDLb4Z8kCyKMEHl5r";
const REDIRECT_URI = "http://localhost:3000/callback";
const PORT = 3000;

const state = crypto.randomBytes(16).toString("hex");

// Construir URL de autorización (sin PKCE, con client secret)
const authUrl = new URL("https://twitter.com/i/oauth2/authorize");
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("scope", "tweet.read tweet.write users.read offline.access");
authUrl.searchParams.set("state", state);

console.log("\n🔗 ABRE este enlace en TU NAVEGADOR:\n");
console.log(authUrl.toString());
console.log("\n📌 Autoriza la app y espera a que el navegador se quede cargando...\n");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname !== "/callback") {
    res.writeHead(404);
    res.end();
    return;
  }

  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (error) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end(`<h3>Error: ${error}</h3><p>${url.searchParams.get("error_description") || ""}</p>`);
    console.error("Error de autorización:", error, url.searchParams.get("error_description"));
    server.close();
    return;
  }

  if (!code) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h3>No code received</h3>");
    server.close();
    return;
  }

  if (returnedState !== state) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h3>State mismatch</h3>");
    console.error("State mismatch! Posible CSRF.");
    server.close();
    return;
  }

  console.log("\n✅ Código recibido. Intercambiando por tokens...\n");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h3>✅ Autorización exitosa! Ya puedes cerrar.</h3>`);

  try {
    const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64url");
    const body = new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
    });

    const tokenResponse = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("Error al obtener tokens:", JSON.stringify(tokenData, null, 2));
      server.close();
      return;
    }

    console.log("✅ Tokens obtenidos!");
    console.log("Access Token:", tokenData.access_token?.slice(0, 30) + "...");
    console.log("Refresh Token:", tokenData.refresh_token?.slice(0, 30) + "...");

    // Verificar identidad
    const meResp = await fetch("https://api.twitter.com/2/users/me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const meData = await meResp.json();
    console.log("Autenticado como:", meData.data?.username || JSON.stringify(meData));

    // Guardar tokens
    const envPath = resolve(projectRoot, ".env");
    let envContent = existsSync(envPath) ? readFileSync(envPath, "utf-8") : "";
    const upsert = (k, v) => {
      if (envContent.includes(`${k}=`)) envContent = envContent.replace(new RegExp(`${k}=.*`, "m"), `${k}=${v}`);
      else envContent += `\n${k}=${v}`;
    };
    upsert("TWITTER_OAUTH2_CLIENT_ID", CLIENT_ID);
    upsert("TWITTER_OAUTH2_CLIENT_SECRET", CLIENT_SECRET);
    upsert("TWITTER_OAUTH2_ACCESS_TOKEN", tokenData.access_token);
    upsert("TWITTER_OAUTH2_REFRESH_TOKEN", tokenData.refresh_token);
    writeFileSync(envPath, envContent);
    console.log("✅ Tokens guardados en .env");

    // Probar tweet
    console.log("\n🧪 Publicando tweet de prueba...");
    const postResp = await fetch("https://api.twitter.com/2/tweets", {
      method: "POST",
      headers: { Authorization: `Bearer ${tokenData.access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: "🧪 Palabras Conectadas con OAuth 2.0 🚀 #PalabrasConectadas" }),
    });
    const postData = await postResp.json();
    if (postResp.ok) {
      console.log("✅ Publicado! https://x.com/user/status/" + postData.data?.id);
    } else {
      console.error("Error al publicar:", JSON.stringify(postData, null, 2));
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
  server.close();
});

server.listen(PORT, () => console.log(`📡 Escuchando en http://localhost:${PORT}/callback`));