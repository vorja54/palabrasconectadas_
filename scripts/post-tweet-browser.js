import { chromium } from "playwright";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const COOKIES_PATH = resolve(projectRoot, ".twitter-cookies.json");
const ENV_PATH = resolve(projectRoot, ".env");

function loadEnv() {
  const content = readFileSync(ENV_PATH, "utf-8");
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

async function loadCookies(context) {
  if (!existsSync(COOKIES_PATH)) return false;
  const cookies = JSON.parse(readFileSync(COOKIES_PATH, "utf-8"));
  if (cookies.length === 0) return false;
  await context.addCookies(cookies);
  return true;
}

async function saveCookies(context) {
  const cookies = await context.cookies();
  writeFileSync(COOKIES_PATH, JSON.stringify(cookies, null, 2));
  const hasAuth = cookies.some(c => c.name === "auth_token");
  console.log(`  Cookies: ${cookies.length} total, auth_token: ${hasAuth ? "SI" : "NO"}`);
  return hasAuth;
}

async function main() {
  const text = process.argv.find(a => a.startsWith("--text="))?.split("=").slice(1).join("=")
    || process.argv[process.argv.indexOf("--text") + 1];
  if (!text) { console.error("Uso: node scripts/post-tweet-browser.js --text \"mensaje\""); process.exit(1); }

  const env = loadEnv();
  const username = env.TWITTER_USERNAME || "PalabrasConctds";
  const password = env.TWITTER_PASSWORD;
  if (!password) { console.error("❌ TWITTER_PASSWORD no encontrada"); process.exit(1); }

  // Xvfb
  execSync("pkill Xvfb 2>/dev/null; sleep 1; Xvfb :99 -screen 0 1280x900x24 -ac &", { stdio: "ignore" });
  execSync("sleep 2", { stdio: "ignore" });
  process.env.DISPLAY = ":99";
  console.log("Xvfb listo");

  const browser = await chromium.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-blink-features=AutomationControlled", "--disable-gpu"],
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    locale: "es-ES",
    timezoneId: "Europe/Madrid",
  });
  await context.addInitScript(() => { Object.defineProperty(navigator, "webdriver", { get: () => undefined }); });

  const page = await context.newPage();

  // Try cookies first
  const hasCookies = await loadCookies(context);
  if (hasCookies) {
    console.log("Verificando cookies...");
    await page.goto("https://x.com/home", { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(3000);
    if (page.url().includes("/home")) {
      console.log("✅ Cookies válidas, yendo a publicar...");
      await page.goto("https://x.com/compose/post", { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(3000);
      if (page.url().includes("/compose")) { /* good */ }
      else { console.log("Compose no disponible"); await browser.close(); process.exit(1); }
    } else {
      console.log("Cookies expiradas, iniciando sesión...");
      // Fall through to login
    }
  }

  // Manual one-shot login approach
  if (!page.url().includes("/compose")) {
    console.log("Abriendo página de login...");
    await page.goto("https://x.com/i/flow/login", { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(5000);

    console.log("Llenando usuario...");
    const userInput = page.locator('input[name="username_or_email"], input[autocomplete~="username"]').first();
    await userInput.waitFor({ state: "visible", timeout: 30000 });
    await userInput.fill(username);
    await page.waitForTimeout(1000);

    console.log("Click Continuar...");
    const nextBtn = page.locator('button[type="submit"], div[role="button"]:has-text("Continuar"), button:has-text("Continuar")').first();
    await nextBtn.waitFor({ state: "visible", timeout: 5000 });
    await nextBtn.click();
    await page.waitForTimeout(3000);

    // Email verification
    try {
      const emailInput = page.locator('input[autocomplete~="email"], input[type="email"]').first();
      await emailInput.waitFor({ state: "visible", timeout: 3000 });
      const body = await page.locator("body").innerText();
      const emailMatch = body.match(/[\w.+-]+@[\w-]+\.[\w.+-]+/);
      const email = emailMatch ? emailMatch[0] : username;
      console.log(`Verificación email: ${email}`);
      await emailInput.fill(email);
      await page.waitForTimeout(500);
      const emailBtn = page.locator('button[type="submit"]').first();
      await emailBtn.waitFor({ state: "visible", timeout: 3000 });
      await emailBtn.click();
      await page.waitForTimeout(2000);
    } catch { /* no email needed */ }

    // Password
    console.log("Llenando contraseña...");
    const pwInput = page.locator('input[type="password"], input[name="password"]').first();
    await pwInput.waitFor({ state: "visible", timeout: 20000 });
    await pwInput.fill(password);
    await page.waitForTimeout(1000);

    console.log("Click Iniciar sesión...");
    const loginBtn = page.locator('button[type="submit"], div[role="button"]:has-text("Iniciar sesión")').first();
    await loginBtn.waitFor({ state: "visible", timeout: 5000 });
    await loginBtn.click();
    await page.waitForTimeout(5000);

    console.log(`URL después login: ${page.url()}`);
    await page.screenshot({ path: resolve(projectRoot, "debug-after-login.png") });

    // Navigate to compose
    await page.goto("https://x.com/compose/post", { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {
      page.evaluate(() => { window.location.href = "/compose/post"; });
    });
    await page.waitForTimeout(5000);
    console.log(`Compose URL: ${page.url()}`);
    await page.screenshot({ path: resolve(projectRoot, "debug-compose.png") });
  }

  // At this point we should be on compose page
  const composeUrl = page.url();
  if (!composeUrl.includes("/compose") && !composeUrl.includes("/home")) {
    console.log(`URL inesperada: ${composeUrl}`);
    await browser.close();
    process.exit(1);
  }

  // If we're on home, click compose
  if (composeUrl.includes("/home")) {
    const postBtn = page.locator('[data-testid="SideNav_NewTweet_Button"]').first();
    if (await postBtn.isVisible().catch(() => false)) {
      await postBtn.click();
      await page.waitForTimeout(3000);
    }
  }

  // Find tweet textarea
  console.log("Buscando campo de tweet...");
  let tweetBox = null;
  for (const sel of ['[data-testid="tweetTextarea_0"]', '[role="textbox"]', '[contenteditable="true"]']) {
    const loc = page.locator(sel).first();
    if (await loc.isVisible().catch(() => false)) { tweetBox = loc; break; }
  }
  if (!tweetBox) { console.log("No se encontró campo de tweet"); await browser.close(); process.exit(1); }

  // Fill tweet text
  await tweetBox.click();
  await page.waitForTimeout(500);
  const tag = await tweetBox.evaluate(el => el.tagName).catch(() => "");
  if (tag === "DIV" || tag === "SPAN") {
    await page.keyboard.type(text, { delay: 20 });
  } else {
    await tweetBox.fill(text);
  }
  await page.waitForTimeout(1000);

  // Click Post
  console.log("Publicando...");
  let postBtn = null;
  for (const sel of ['[data-testid="tweetButtonInline"]', '[data-testid="tweetButton"]', 'button:has-text("Publicar")', 'button:has-text("Post")']) {
    const btn = page.locator(sel).first();
    if (await btn.isVisible().catch(() => false) && await btn.isEnabled().catch(() => false)) { postBtn = btn; break; }
  }
  if (!postBtn) { console.log("No se encontró botón Publicar"); await browser.close(); process.exit(1); }

  await postBtn.click();
  await page.waitForTimeout(4000);

  console.log("✅ Tweet enviado! (verificar en x.com)");
  await saveCookies(page.context()).catch(() => {});
  await browser.close();
  console.log("✅ Completado!");
}

main().catch((err) => { console.error("Error:", err.message); process.exitCode = 1; });