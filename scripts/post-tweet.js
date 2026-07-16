import { TwitterApi } from "twitter-api-v2";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

function loadEnv() {
  const envPath = resolve(projectRoot, ".env");
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

function getCredentials() {
  const env = loadEnv();
  const get = (key) => process.env[key] || env[key] || null;

  return {
    apiKey: get("TWITTER_API_KEY"),
    apiKeySecret: get("TWITTER_API_KEY_SECRET"),
    accessToken: get("TWITTER_ACCESS_TOKEN"),
    accessTokenSecret: get("TWITTER_ACCESS_TOKEN_SECRET"),
  };
}

async function main() {
  const { positionals } = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
    options: {
      text: { type: "string", short: "t" },
      help: { type: "boolean", short: "h" },
    },
  });

  if (positionals[0] === "--help" || positionals[0] === "-h") {
    console.log(`Usage: post-tweet.js --text "tweet content"`);
    process.exit(0);
  }

  const rawArgs = process.argv.slice(2);
  const parsed = parseArgs({
    args: rawArgs,
    allowPositionals: true,
    options: {
      text: { type: "string", short: "t" },
      help: { type: "boolean", short: "h" },
    },
  });

  const text = parsed.values.text;
  if (!text) {
    console.error("Error: --text is required");
    process.exit(1);
  }

  const creds = getCredentials();

  // Debug: print credential info
  console.error("Cred check:");
  console.error("  API Key:", creds.apiKey, `(${creds.apiKey?.length} chars)`);
  console.error("  Secret:", creds.apiKeySecret ? `${creds.apiKeySecret.slice(0,4)}...${creds.apiKeySecret.slice(-4)}` : "MISSING", `(${creds.apiKeySecret?.length} chars)`);
  console.error("  Token:", creds.accessToken, `(${creds.accessToken?.length} chars)`);
  console.error("  Token Secret:", creds.accessTokenSecret ? `${creds.accessTokenSecret.slice(0,4)}...${creds.accessTokenSecret.slice(-4)}` : "MISSING", `(${creds.accessTokenSecret?.length} chars)`);

  if (!creds.apiKey || !creds.apiKeySecret || !creds.accessToken || !creds.accessTokenSecret) {
    console.error("Error: Missing Twitter credentials in .env or environment variables");
    console.error("Required: TWITTER_API_KEY, TWITTER_API_KEY_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET");
    process.exit(1);
  }

  const client = new TwitterApi({
    appKey: creds.apiKey,
    appSecret: creds.apiKeySecret,
    accessToken: creds.accessToken,
    accessSecret: creds.accessTokenSecret,
  });

  const response = await client.v2.tweet(text);
  const tweetId = response.data?.id;
  if (tweetId) {
    console.log(`Tweet publicado: https://x.com/user/status/${tweetId}`);
  } else {
    console.log("Tweet publicado (sin ID devuelto)");
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  if (err.data) console.error("Detalle:", JSON.stringify(err.data, null, 2));
  if (err.code) console.error("Código:", err.code);
  process.exitCode = 1;
});