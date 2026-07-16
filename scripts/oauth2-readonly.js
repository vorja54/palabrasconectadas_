import http from "node:http";
import crypto from "node:crypto";
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

const authUrl = new URL("https://twitter.com/i/oauth2/authorize");
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("scope", "tweet.read users.read offline.access"); // Sin tweet.write
authUrl.searchParams.set("state", state);

console.log("\n🔗 ABRE este enlace (SIN permiso de escritura):\n");
console.log(authUrl.toString());
console.log("\nSi esto funciona, el problema es que X requiere créditos para tweet.write\n");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== "/callback") { res.writeHead(404); res.end(); return; }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  if (error) {
    console.log("ERROR:", error, url.searchParams.get("error_description") || "");
    res.end(`<h3>Error: ${error}</h3>`);
    server.close(); return;
  }
  if (!code) { res.end("<h3>No code</h3>"); server.close(); return; }

  console.log("✅ Código recibido. Intercambiando...\n");
  res.end("<h3>✅ Autorizado!</h3>");

  const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64url");
  const tokenResp = await fetch("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers: { Authorization: `Basic ${basicAuth}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ code, grant_type: "authorization_code", client_id: CLIENT_ID, redirect_uri: REDIRECT_URI }),
  });
  const tokenData = await tokenResp.json();
  if (!tokenResp.ok) {
    console.log("TOKEN ERROR:", JSON.stringify(tokenData, null, 2));
    server.close(); return;
  }
  console.log("✅ Token obtenido!");
  console.log("Access:", tokenData.access_token?.slice(0, 40) + "...");

  // Test whoami
  const me = await fetch("https://api.twitter.com/2/users/me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  console.log("Whoami:", await me.json());

  server.close();
});
server.listen(PORT, () => console.log(`📡 http://localhost:${PORT}/callback`));