import http from "node:http";
import crypto from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import localtunnel from "localtunnel";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const CLIENT_ID = "P4ILzpN0rUcv9zihBU0PK6nJD2r_NrU99RK-eUasYRfKoSssgP";
const CLIENT_SECRET = "Aqr0utvZs5v4Q6EVhSOLQLZII3M9C3rzAQDLb4Z8kCyKMEHl5r";
const LOCAL_PORT = 3000;
const state = crypto.randomBytes(16).toString("hex");

// Variables que se llenarán
let tunnelUrl = "";
let server;

// Crear servidor local
async function startServer() {
  return new Promise((resolve) => {
    server = http.createServer(async (req, res) => {
      const url = new URL(req.url, `http://localhost:${LOCAL_PORT}`);

      if (url.pathname !== "/callback") {
        res.writeHead(404);
        res.end();
        return;
      }

      const code = url.searchParams.get("code");
      const returnedState = url.searchParams.get("state");
      const error = url.searchParams.get("error");

      if (error) {
        console.log("\n❌ Error:", error, url.searchParams.get("error_description") || "");
        res.end(`<h3>Error: ${error}</h3>`);
        server.close();
        return;
      }

      if (!code) {
        res.end("<h3>No code received</h3>");
        server.close();
        return;
      }

      console.log("\n✅ Código recibido! Intercambiando por tokens...\n");
      res.end("<h3>✅ Autorización exitosa! Puedes cerrar esta ventana.</h3>");

      const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64url");
      const body = new URLSearchParams({
        code,
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        redirect_uri: tunnelUrl + "/callback",
      });

      const tokenResp = await fetch("https://api.twitter.com/2/oauth2/token", {
        method: "POST",
        headers: { Authorization: `Basic ${basicAuth}`, "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const tokenData = await tokenResp.json();

      if (!tokenResp.ok) {
        console.log("❌ Error tokens:", JSON.stringify(tokenData, null, 2));
        server.close();
        return;
      }

      console.log("✅ Access Token:", tokenData.access_token?.slice(0, 40) + "...");
      console.log("✅ Refresh Token:", tokenData.refresh_token?.slice(0, 40) + "...");

      // Verificar identidad
      const me = await fetch("https://api.twitter.com/2/users/me", {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      });
      const meData = await me.json();
      console.log("Autenticado como:", meData.data?.username || "ERROR: " + JSON.stringify(meData));

      if (!meData.data?.username) {
        server.close();
        return;
      }

      // Probar tweet
      console.log("\n🧪 Publicando tweet de prueba...");
      const postResp = await fetch("https://api.twitter.com/2/tweets", {
        method: "POST",
        headers: { Authorization: `Bearer ${tokenData.access_token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ text: "🧪 ¡Palabras Conectadas funciona con OAuth 2.0! 🚀 #PalabrasConectadas" }),
      });
      const postData = await postResp.json();
      if (postResp.ok) {
        console.log("✅ Publicado! https://x.com/user/status/" + postData.data?.id);
        // Guardar tokens
        saveTokens(tokenData);
      } else {
        console.log("❌ Error al publicar:", JSON.stringify(postData, null, 2));
        // Even if posting fails, save tokens for future use
        saveTokens(tokenData);
      }
      server.close();
    });

    server.listen(LOCAL_PORT, () => resolve());
  });
}

function saveTokens(tokenData) {
  const envPath = resolve(projectRoot, ".env");
  let envContent = existsSync(envPath) ? readFileSync(envPath, "utf-8") : "";
  const upsert = (k, v) => {
    const re = new RegExp(`${k}=.*`, "m");
    if (re.test(envContent)) envContent = envContent.replace(re, `${k}=${v}`);
    else envContent += `\n${k}=${v}`;
  };
  upsert("TWITTER_OAUTH2_ACCESS_TOKEN", tokenData.access_token);
  upsert("TWITTER_OAUTH2_REFRESH_TOKEN", tokenData.refresh_token);
  writeFileSync(envPath, envContent);
  console.log("✅ Tokens guardados en .env");
}

async function main() {
  await startServer();
  console.log("📡 Servidor local en puerto", LOCAL_PORT);

  // Iniciar túnel
  const tunnel = await localtunnel({ port: LOCAL_PORT, subdomain: "palabras-conectadas" });
  tunnelUrl = tunnel.url.replace(/\/$/, "");
  console.log("🔗 Túnel público:", tunnelUrl);

  // Construir URL de autorización
  const callbackUrl = tunnelUrl + "/callback";
  const authUrl = new URL("https://twitter.com/i/oauth2/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", callbackUrl);
  authUrl.searchParams.set("scope", "tweet.read tweet.write users.read offline.access");
  authUrl.searchParams.set("state", state);

  console.log("\n═══════════════════════════════════════════");
  console.log("⚠️  ANTES de abrir el enlace:");
  console.log("   Añade esta URL como callback en X Developer:");
  console.log("   👉", callbackUrl);
  console.log("═══════════════════════════════════════════\n");
  console.log("📌 LUEGO abre este enlace en tu navegador:\n");
  console.log(authUrl.toString());
  console.log("\n⏳ Esperando autorización...\n");

  tunnel.on("close", () => {
    console.log("Túnel cerrado");
  });
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exitCode = 1;
});