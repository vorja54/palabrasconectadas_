import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

function loadEnv() {
  const envPath = resolve(projectRoot, ".env.credentials.txt");
  if (!existsSync(envPath)) return {};
  const content = readFileSync(envPath, "utf-8");
  const vars = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    vars[trimmed.slice(0, eqIdx).trim()] = trimmed.slice(eqIdx + 1).trim();
  }
  return vars;
}

// Try Bearer Token (OAuth 2.0 app-only)
const BEARER = "AAAAAAAAAAAAAAAAADcAw%2BQEAAAAA5jDD0UssoJAdC8w23IalzCPtNs%3DbVGNUrHsJ7z9VSasiQvwWkoIRcf4pUdR9heg015ceGSMYkW9I";

console.log("Test 1: OAuth 2.0 Bearer (app-only) - GET /2/users/me\n");
const r1 = await fetch("https://api.twitter.com/2/users/me", {
  headers: { Authorization: `Bearer ${BEARER}` },
});
console.log("Status:", r1.status, r1.statusText);
const d1 = await r1.json().catch(() => ({}));
console.log("Response:", JSON.stringify(d1, null, 2));

console.log("\n---\n");

// Also try OAuth 2.0 Client Credentials flow
console.log("Test 2: OAuth 2.0 Client Credentials (get app-only token)\n");
const clientId = "eUN4eVZna1owTXhoMnhvbDczZGM6MTpjaQ";
const clientSecret = "hCk68QbSdqLY832RJZEJatr9JQtktYnarwD037gnLuwdlq000";

const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const tokenResponse = await fetch("https://api.twitter.com/oauth2/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basicAuth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "grant_type=client_credentials",
});
console.log("Token status:", tokenResponse.status);
const tokenData = await tokenResponse.json().catch(() => ({}));
console.log("Token response:", JSON.stringify(tokenData, null, 2));

if (tokenData.access_token) {
  console.log("\nUsing app-only token to read tweets...\n");
  const r2 = await fetch("https://api.twitter.com/2/users/me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  console.log("Status:", r2.status);
  const d2 = await r2.json().catch(() => ({}));
  console.log("Response:", JSON.stringify(d2, null, 2));
}