import { chromium } from "playwright";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

async function findVisibleInput(page, selectors) {
  for (const sel of selectors) {
    const loc = page.locator(sel);
    const count = await loc.count();
    for (let i = 0; i < count; i++) {
      if (await loc.nth(i).isVisible().catch(() => false)) return loc.nth(i);
    }
  }
  const allInputs = page.locator("input");
  const count = await allInputs.count();
  for (let i = 0; i < count; i++) {
    if (await allInputs.nth(i).isVisible().catch(() => false)) return allInputs.nth(i);
  }
  return null;
}

async function debugPage(page, label) {
  const url = page.url();
  const title = await page.title().catch(() => "?");
  await page.screenshot({ path: resolve(projectRoot, `debug-${label}.png`), fullPage: false });
  const body = await page.locator("body").innerText().catch(() => "?");
  console.log(`\n=== ${label} ===`);
  console.log(`URL: ${url}`);
  console.log(`Title: ${title}`);
  console.log(`Body (first 300 chars): ${body.slice(0, 300)}`);
  return { url, title, body };
}

async function main() {
  const env = Object.fromEntries(
    readFileSync(resolve(projectRoot, ".env"), "utf-8").split("\n")
      .filter(l => l.trim() && !l.startsWith("#"))
      .map(l => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
  );
  const username = env.TWITTER_USERNAME;
  const password = env.TWITTER_PASSWORD;

  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    locale: "es-ES",
    timezoneId: "Europe/Madrid",
  });
  await context.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => undefined });
  });

  const page = await context.newPage();

  // Step 1: Go to login page
  await page.goto("https://x.com/i/flow/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(4000);
  await debugPage(page, "01-login-page");

  // Step 2: Fill username
  const userInput = await findVisibleInput(page, [
    'input[placeholder*="Correo electrónico"]',
    'input[placeholder*="nombre de usuario"]',
    'input[autocomplete="username"]',
    'input[name="text"]',
  ]);
  if (!userInput) throw new Error("No username input");
  await userInput.fill(username);
  await page.waitForTimeout(500);
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(3000);
  await debugPage(page, "02-after-username");

  // Step 3: Check for email verification
  const verifyInput = await findVisibleInput(page, ['input[autocomplete="email"]']);
  if (verifyInput) {
    console.log("\n--- Email verification step ---");
    const body = await page.locator("body").innerText();
    const emailMatch = body.match(/[\w.+-]+@[\w-]+\.[\w.+-]+/);
    if (emailMatch) {
      console.log("Email found:", emailMatch[0]);
      await verifyInput.fill(emailMatch[0]);
      await page.waitForTimeout(500);
      await page.locator('button[type="submit"]').click();
      await page.waitForTimeout(3000);
      await debugPage(page, "03-after-email-verify");
    }
  }

  // Step 4: Check for extra username step
  const unameField = await findVisibleInput(page, ['input[autocomplete="username"]']);
  if (unameField) {
    console.log("\n--- Extra username step ---");
    await unameField.fill(username);
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(3000);
    await debugPage(page, "04-after-username-step");
  }

  // Step 5: Password
  const pwInput = await findVisibleInput(page, [
    'input[autocomplete="current-password"]',
    'input[type="password"]',
  ]);
  if (pwInput) {
    console.log("\n--- Password step ---");
    await pwInput.fill(password);
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]').click();
    // Wait longer for login to complete
    await page.waitForTimeout(10000);
    await debugPage(page, "05-after-password");
  } else {
    console.log("\n--- No password input found ---");
  }

  // Step 6: Try to check for onboarding/confirmation steps
  // Wait and screenshot repeatedly
  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(3000);
    const d = await debugPage(page, `06-after-wait-${i + 1}`);
    // If we reached /home, we're done
    if (d.url.includes("/home") || d.url.match(/^https:\/\/x\.com\/?$/)) {
      console.log("\n✅ Reached home page!");
      break;
    }
    // If there's another button, try clicking it
    const buttons = await page.locator("button").all();
    for (const btn of buttons) {
      const text = await btn.innerText().catch(() => "");
      if (text.match(/Siguiente|Next|Continue|Continuar|Confirmar|Confirm/i) && await btn.isVisible()) {
        console.log(`Clicking: "${text}"`);
        await btn.click();
        await page.waitForTimeout(2000);
        break;
      }
    }
  }

  await browser.close();
}

main().catch(console.error);