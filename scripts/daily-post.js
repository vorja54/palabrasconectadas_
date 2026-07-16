#!/usr/bin/env node
import { execSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

// Get today's date in Madrid timezone
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

const puzzleUrl = `https://laconexiondeldia.com/puzzle/${year}-${month}-${day}`;

// Build tweet text
const daysOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const dateStr = `${day} de ${months[now.getMonth()]} de ${year}`;

const tweetText = `🧩 Palabras Conectadas - ${dateStr}

¿Puedes encontrar las 4 conexiones? Juega gratis aquí:
${puzzleUrl}

#PalabrasConectadas #Conexiones #JuegoDiario`;

// Escape for shell
const escaped = tweetText.replace(/"/g, '\\"').replace(/\n/g, "\\n");
const scriptPath = resolve(projectRoot, "scripts/post-tweet-browser.js");
const cmd = `node "${scriptPath}" --text "${escaped}"`;

console.log("Publicando en @PalabrasConctds...");
console.log("Mensaje:", `"${tweetText.slice(0, 60)}..."`);
console.log("URL:", puzzleUrl);

try {
  execSync(cmd, { cwd: projectRoot, stdio: "inherit", timeout: 300000 });
  console.log("✅ Publicación exitosa!");
} catch (err) {
  console.error("❌ Error:", err.message);
  process.exit(1);
}