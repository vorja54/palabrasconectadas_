// Cloudflare Pages Function — /test-animations
// Página de testing visual para animaciones del juego

const PAGE = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Test de Animaciones — Palabras Conectadas</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0f0f23; color: #e0e0e0; padding: 2rem 1rem;
  }
  .container { max-width: 800px; margin: 0 auto; }
  h1 { font-size: 1.8rem; margin-bottom: 0.3rem; }
  .subtitle { color: #999; margin-bottom: 2rem; font-size: 0.95rem; }

  section {
    background: #1a1a2e; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;
    border: 1px solid #2a2a4a;
  }
  h2 { font-size: 1.2rem; margin-bottom: 1rem; color: #87b0d9; }
  h2 .badge {
    font-size: 0.7rem; background: #2a2a4a; padding: 0.15rem 0.5rem; border-radius: 4px;
    color: #999; font-weight: 400; margin-left: 0.5rem;
  }
  .btn-group { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
  .btn {
    padding: 0.5rem 1.2rem; border: none; border-radius: 8px; font-size: 0.85rem;
    font-weight: 600; cursor: pointer; transition: all 0.15s ease;
  }
  .btn-primary { background: #e94560; color: #fff; }
  .btn-primary:hover { background: #d63851; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(233,69,96,0.3); }
  .btn-secondary { background: #2a2a4a; color: #ccc; }
  .btn-secondary:hover { background: #3a3a5a; }
  .btn-reset { background: #333; color: #aaa; font-size: 0.75rem; }
  .btn-reset:hover { background: #444; }
  .label { font-size: 0.75rem; color: #666; margin-bottom: 0.5rem; display: block; }

  /* ====== DEMO AREAS ====== */

  /* 1. Staggered Tile Entrance */
  .tile-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
    max-width: 320px;
  }
  .tile-grid .tile {
    aspect-ratio: 1; border-radius: 8px; display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; font-weight: 600; color: #fff; background: #2a2a4a;
    border: 2px solid #3a3a5a; cursor: default;
    opacity: 0; transform: translateY(12px) scale(0.92);
  }
  .tile-grid .tile.in { animation: tile-enter 0.35s ease-out forwards; }
  @keyframes tile-enter {
    0% { opacity: 0; transform: translateY(12px) scale(0.92); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  .tile-grid .tile.yellow { background: #F9DF6D; color: #333; border-color: #e8c84a; }
  .tile-grid .tile.green { background: #A0C35A; color: #333; border-color: #8aad3e; }
  .tile-grid .tile.blue { background: #B0C4EF; color: #1a1a2e; border-color: #8da8d8; }
  .tile-grid .tile.purple { background: #BA81C5; color: #fff; border-color: #9e63aa; }

  /* 2. Category Reveal */
  .cat-row {
    display: flex; align-items: center; gap: 8px; padding: 12px 16px;
    border-radius: 8px; margin-bottom: 8px;
    opacity: 0; transform: scale(0.88);
    max-width: 360px;
  }
  .cat-row.reveal { animation: cat-reveal 0.4s ease-out forwards; }
  .cat-row.reveal-early { animation: cat-reveal 0.4s ease-out 0.1s forwards; }
  .cat-row.reveal-late { animation: cat-reveal 0.4s ease-out 0.2s forwards; }
  @keyframes cat-reveal {
    0% { opacity: 0; transform: scale(0.88); }
    70% { transform: scale(1.03); }
    100% { opacity: 1; transform: scale(1); }
  }
  .cat-row .cat-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .cat-row .cat-word { font-size: 0.8rem; font-weight: 500; }

  /* 3. Hover Effects */
  .hover-demo {
    display: flex; gap: 12px; flex-wrap: wrap;
  }
  .hover-card {
    padding: 1rem 1.5rem; border-radius: 8px; background: #2a2a4a;
    border: 1px solid #3a3a5a; cursor: pointer; transition: all 0.2s ease;
    font-size: 0.85rem; text-align: center;
  }
  .hover-card:hover {
    transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    border-color: #e94560;
  }
  .hover-card.v2:hover { border-color: #A0C35A; box-shadow: 0 8px 24px rgba(160,195,90,0.2); }
  .hover-card.v3:hover { border-color: #B0C4EF; box-shadow: 0 8px 24px rgba(176,196,239,0.2); }

  /* 4. Tab Transition */
  .tab-bar { display: flex; gap: 0; margin-bottom: 0; background: #2a2a4a; border-radius: 8px 8px 0 0; overflow: hidden; }
  .tab-bar .tab {
    flex: 1; padding: 0.6rem 1rem; text-align: center; cursor: pointer;
    font-size: 0.8rem; font-weight: 600; transition: all 0.2s;
    background: transparent; color: #666; border: none;
  }
  .tab-bar .tab.active { background: #3a3a5a; color: #fff; }
  .tab-bar .tab:hover:not(.active) { color: #999; }
  .tab-content {
    background: #2a2a4a; border-radius: 0 0 8px 8px; padding: 1rem;
    border-top: 1px solid #3a3a5a; min-height: 100px;
  }
  .tab-panel {
    display: none; animation: tab-fade 0.25s ease-out;
  }
  .tab-panel.active { display: block; }
  @keyframes tab-fade {
    0% { opacity: 0; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* 5. Stats Counter */
  .stat-grid { display: flex; gap: 16px; }
  .stat-card {
    flex: 1; text-align: center; padding: 1rem; background: #2a2a4a;
    border-radius: 8px; border: 1px solid #3a3a5a;
  }
  .stat-card .num {
    font-size: 1.8rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .stat-card .num .count-up { display: inline-block; }
  .stat-card .label { color: #666; font-size: 0.7rem; margin-top: 0.3rem; }

  /* 6. Toast Bounce */
  .toast-demo {
    position: relative; min-height: 60px;
  }
  .toast-bounce {
    background: #e94560; color: #fff; padding: 0.7rem 1.2rem;
    border-radius: 10px; font-size: 0.9rem; font-weight: 600;
    display: inline-block;
    animation: toast-bounce 0.4s ease-out;
  }
  @keyframes toast-bounce {
    0% { opacity: 0; transform: translateY(-30px) scale(0.8); }
    60% { transform: translateY(4px) scale(1.02); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  .toast-out { animation: toast-out 0.3s ease-in forwards; }
  @keyframes toast-out {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
  }

  /* 7. Flip Reveal (Win/Loss) */
  .flip-grid { display: flex; gap: 8px; }
  .flip-card {
    width: 60px; height: 60px; background: #3a3a5a; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; font-weight: 600; color: transparent;
    perspective: 200px; cursor: default;
  }
  .flip-card.flipped {
    animation: flip-reveal 0.4s ease-out forwards;
  }
  @keyframes flip-reveal {
    0% { transform: rotateY(90deg); color: transparent; background: #3a3a5a; }
    50% { background: #87b0d9; }
    100% { transform: rotateY(0deg); color: #fff; background: #A0C35A; }
  }

  /* 8. Timer Flip Digits */
  .timer-demo { font-family: 'Courier New', monospace; font-size: 2rem; font-weight: 700; display: inline-flex; gap: 2px; align-items: center; }
  .timer-digit {
    display: inline-block; width: 1.2em; text-align: center; position: relative;
    background: #2a2a4a; border-radius: 4px; padding: 0.1rem 0.2rem;
    transition: none;
  }
  .timer-digit.flip {
    animation: digit-flip 0.3s ease-in-out;
  }
  @keyframes digit-flip {
    0% { transform: rotateX(0deg); opacity: 1; }
    50% { transform: rotateX(90deg); opacity: 0.3; background: #e94560; }
    100% { transform: rotateX(0deg); opacity: 1; }
  }

  /* 9. Mistake Dots */
  .dots-demo { display: flex; gap: 10px; }
  .mistake-dot {
    width: 24px; height: 24px; border-radius: 50%; border: 2px solid #555;
    background: transparent; transition: all 0.3s;
  }
  .mistake-dot.fail { animation: dot-fail 0.6s ease-out; }
  @keyframes dot-fail {
    0% { background: transparent; transform: scale(1); border-color: #555; }
    20% { background: #e94560; transform: scale(1.6); border-color: #e94560; box-shadow: 0 0 20px rgba(233,69,96,0.5); }
    40% { transform: scale(1.2); }
    60% { transform: scale(1.4); }
    100% { background: #e94560; transform: scale(1); border-color: #e94560; }
  }

  /* 10. Particles */
  .particles-area {
    position: relative; min-height: 120px; overflow: hidden;
    background: #0f0f23; border-radius: 8px; border: 1px solid #2a2a4a;
  }
  .particle { position: absolute; border-radius: 50%; pointer-events: none; }
  @keyframes particle-burst {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
  }

  /* 11. Canvas confetti placeholder */
  .confetti-canvas { width: 100%; height: 200px; border-radius: 8px; border: 1px solid #2a2a4a; }
</style>
</head>
<body>
<div class="container">
  <h1>🎨 Test de Animaciones</h1>
  <p class="subtitle">Palabras Conectadas — Selecciona las que quieras implementar en el juego</p>

  <!-- 1. Staggered Tile Entrance -->
  <section>
    <h2>1. Entrada escalonada de palabras <span class="badge">Alta prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Las 16 fichas aparecen con un leve retardo en cascada. Se siente más pulido que verlas todas de golpe.
    </p>
    <div class="tile-grid" id="staggerGrid"></div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="runStagger()">Reproducir</button>
      <button class="btn btn-reset" onclick="resetStagger()">Reset</button>
    </div>
  </section>

  <!-- 2. Category Reveal -->
  <section>
    <h2>2. Revelación de categoría <span class="badge">Alta prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Al acertar, la categoría se revela con un scale + fade en vez de aparecer instantáneamente.
    </p>
    <div id="catRevealArea" style="max-width:360px;">
      <div class="cat-row" style="background:#F9DF6D;color:#333;">
        <div class="cat-dot" style="background:#d4b84a;"></div>
        <span class="cat-word">SOL</span><span class="cat-word">LUNA</span><span class="cat-word">ESTRELLA</span><span class="cat-word">PLANETA</span>
      </div>
      <div class="cat-row" style="background:#A0C35A;color:#333;">
        <div class="cat-dot" style="background:#7fa33e;"></div>
        <span class="cat-word">ROBLE</span><span class="cat-word">PINO</span><span class="cat-word">SAUCE</span><span class="cat-word">CEDRO</span>
      </div>
      <div class="cat-row" style="background:#B0C4EF;color:#1a1a2e;">
        <div class="cat-dot" style="background:#8da8d8;"></div>
        <span class="cat-word">MAR</span><span class="cat-word">RÍO</span><span class="cat-word">LAGO</span><span class="cat-word">OCÉANO</span>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="runCategoryReveal()">Reproducir</button>
      <button class="btn btn-reset" onclick="resetCategoryReveal()">Reset</button>
    </div>
  </section>

  <!-- 3. Hover Effects -->
  <section>
    <h2>3. Efectos hover en tarjetas <span class="badge">Media prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Las fichas se elevan y tienen sombra al pasar el ratón. Pequeño detalle que suma calidad.
    </p>
    <div class="hover-demo">
      <div class="hover-card">Normal</div>
      <div class="hover-card v2">Categoría verde</div>
      <div class="hover-card v3">Categoría azul</div>
    </div>
    <p style="color:#666;font-size:0.75rem;margin-top:0.5rem;">Pasa el ratón por encima para ver el efecto.</p>
  </section>

  <!-- 4. Tab Transition -->
  <section>
    <h2>4. Transición entre modos <span class="badge">Media prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Al cambiar de pestaña (Normal/Difícil/Mundial) el contenido hace fade + slide en vez de aparecer de golpe.
    </p>
    <div class="tab-bar" id="tabBar">
      <button class="tab active" onclick="switchTab('normal',this)">🎮 Normal</button>
      <button class="tab" onclick="switchTab('jason',this)">🎯 Difícil</button>
      <button class="tab" onclick="switchTab('special',this)">⚽ Mundial</button>
    </div>
    <div class="tab-content">
      <div class="tab-panel active" id="tab-normal">
        <p style="color:#ccc;">Puzzle normal: 4 categorías, 4 errores, 4 señuelos.</p>
      </div>
      <div class="tab-panel" id="tab-jason">
        <p style="color:#ccc;">Puzzle difícil: 4 categorías, 3 errores, 8 señuelos.</p>
      </div>
      <div class="tab-panel" id="tab-special">
        <p style="color:#ccc;">Edición Mundial 2026: disponible del 11 Jun al 19 Jul.</p>
      </div>
    </div>
  </section>

  <!-- 5. Stats Counter -->
  <section>
    <h2>5. Contador animado de estadísticas <span class="badge">Alta prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Los números cuentan desde 0 hasta su valor final al abrir las estadísticas.
    </p>
    <div class="stat-grid">
      <div class="stat-card"><div class="num"><span class="count-up" data-target="47">0</span></div><div class="label">Jugadas</div></div>
      <div class="stat-card"><div class="num"><span class="count-up" data-target="83">0</span><span style="font-size:1rem;color:#999;">%</span></div><div class="label">Victorias</div></div>
      <div class="stat-card"><div class="num"><span class="count-up" data-target="12">0</span></div><div class="label">Racha actual</div></div>
      <div class="stat-card"><div class="num"><span class="count-up" data-target="28">0</span></div><div class="label">Mejor racha</div></div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="runCounters()">Reproducir</button>
      <button class="btn btn-reset" onclick="resetCounters()">Reset</button>
    </div>
  </section>

  <!-- 6. Toast Bounce -->
  <section>
    <h2>6. Toast con rebote <span class="badge">Media prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      El mensaje "Falta uno!" entra con rebote desde arriba y sale deslizándose.
    </p>
    <div class="toast-demo">
      <div id="toastContainer"></div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="showToast()">Mostrar toast</button>
      <button class="btn btn-secondary" onclick="hideToast()">Ocultar</button>
    </div>
  </section>

  <!-- 7. Flip Reveal -->
  <section>
    <h2>7. Revelación tipo flip (Win/Loss) <span class="badge">Media prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Al perder, las categorías no resueltas se revelan como cartas dándose la vuelta.
    </p>
    <div class="flip-grid" id="flipGrid">
      <div class="flip-card">SOL</div>
      <div class="flip-card">LUNA</div>
      <div class="flip-card">MAR</div>
      <div class="flip-card">SOL</div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="runFlip()">Reproducir</button>
      <button class="btn btn-reset" onclick="resetFlip()">Reset</button>
    </div>
  </section>

  <!-- 8. Timer Flip -->
  <section>
    <h2>8. Timer con flip digits <span class="badge">Baja prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Los dígitos del cronómetro hacen un flip 3D al cambiar. Pequeño detalle de calidad.
    </p>
    <div class="timer-demo">
      <span class="timer-digit" id="td1">0</span>
      <span class="timer-digit" id="td2">0</span>
      <span style="margin:0 2px;">:</span>
      <span class="timer-digit" id="td3">0</span>
      <span class="timer-digit" id="td4">0</span>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="tickTimer()">Tick</button>
      <button class="btn btn-secondary" onclick="startAutoTick()">Auto</button>
      <button class="btn btn-reset" onclick="stopAutoTick()">Stop</button>
    </div>
  </section>

  <!-- 9. Mistake Dots -->
  <section>
    <h2>9. Indicador de error mejorado <span class="badge">Alta prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Al fallar, el punto de error pulsa expandiéndose con un glow rojo, más dramático.
    </p>
    <div class="dots-demo" id="dotsDemo">
      <div class="mistake-dot"></div>
      <div class="mistake-dot"></div>
      <div class="mistake-dot"></div>
      <div class="mistake-dot"></div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="failDot()">Fallar</button>
      <button class="btn btn-reset" onclick="resetDots()">Reset</button>
    </div>
  </section>

  <!-- 10. Particles -->
  <section>
    <h2>10. Partículas al acertar categoría <span class="badge">Baja prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Pequeñas partículas de colores salen disparadas de los tiles al resolverse.
    </p>
    <div class="particles-area" id="particlesArea" style="display:flex;align-items:center;justify-content:center;">
      <span style="color:#555;">Pulsa "Explotar" para ver las partículas</span>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="burstParticles()">Explotar</button>
    </div>
  </section>

  <!-- 11. Canvas Confetti -->
  <section>
    <h2>11. Confetti mejorado (victoria) <span class="badge">Baja prioridad</span></h2>
    <p style="color:#999;font-size:0.85rem;margin-bottom:1rem;">
      Partículas de colores + emojis (🎮🎯⚽) cayendo al ganar, más vistoso que el confeti actual.
    </p>
    <canvas id="confettiCanvas" class="confetti-canvas"></canvas>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="runConfetti()">Reproducir 🎉</button>
    </div>
  </section>
</div>

<script>
// ===================== 1. Staggered Tile Entrance =====================
function buildStagger() {
  const grid = document.getElementById('staggerGrid');
  grid.innerHTML = '';
  const words = ['SOL','LUNA','MAR','SOL','ROBLE','PINO','ROSA','CEDRO','PERRO','GATO','LOBO','PEZ','ROJO','AZUL','VERDE','ORO'];
  const colors = ['yellow','yellow','yellow','yellow','green','green','green','green','blue','blue','blue','blue','purple','purple','purple','purple'];
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile ' + colors[i];
    tile.textContent = words[i];
    tile.style.animationDelay = '0ms';
    tile.dataset.idx = i;
    grid.appendChild(tile);
  }
}
function runStagger() {
  const tiles = document.querySelectorAll('#staggerGrid .tile');
  tiles.forEach((t, i) => {
    t.classList.remove('in');
    void t.offsetWidth; // reflow
    t.style.animationDelay = (i * 35) + 'ms';
    t.classList.add('in');
  });
}
function resetStagger() {
  document.querySelectorAll('#staggerGrid .tile').forEach(t => {
    t.classList.remove('in');
    t.style.animationDelay = '0ms';
  });
}
buildStagger();

// ===================== 2. Category Reveal =====================
function runCategoryReveal() {
  const rows = document.querySelectorAll('#catRevealArea .cat-row');
  rows.forEach((r, i) => {
    r.classList.remove('reveal', 'reveal-early', 'reveal-late');
    void r.offsetWidth;
    if (i === 0) r.classList.add('reveal');
    else if (i === 1) r.classList.add('reveal-early');
    else r.classList.add('reveal-late');
  });
}
function resetCategoryReveal() {
  document.querySelectorAll('#catRevealArea .cat-row').forEach(r => {
    r.classList.remove('reveal', 'reveal-early', 'reveal-late');
  });
}

// ===================== 4. Tab Transition =====================
function switchTab(name, btn) {
  document.querySelectorAll('#tabBar .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
}

// ===================== 5. Stats Counter =====================
function runCounters() {
  const counters = document.querySelectorAll('.count-up');
  counters.forEach(c => {
    const target = parseInt(c.dataset.target);
    animateCounter(c, target);
  });
}
function animateCounter(el, target) {
  let current = 0;
  const steps = Math.min(target, 40);
  const increment = target / steps;
  const duration = 800;
  const interval = duration / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, interval);
}
function resetCounters() {
  document.querySelectorAll('.count-up').forEach(c => c.textContent = '0');
}

// ===================== 6. Toast Bounce =====================
function showToast() {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast-bounce';
  toast.textContent = '⚠️ ¡Falta uno!';
  container.innerHTML = '';
  container.appendChild(toast);
}
function hideToast() {
  const toast = document.querySelector('.toast-bounce');
  if (toast) {
    toast.classList.remove('toast-bounce');
    toast.classList.add('toast-out');
    setTimeout(() => { if (toast.parentNode) toast.parentNode.innerHTML = ''; }, 300);
  }
}

// ===================== 7. Flip Reveal =====================
function runFlip() {
  const cards = document.querySelectorAll('#flipGrid .flip-card');
  cards.forEach((c, i) => {
    c.classList.remove('flipped');
    void c.offsetWidth;
    setTimeout(() => c.classList.add('flipped'), i * 100);
  });
}
function resetFlip() {
  document.querySelectorAll('#flipGrid .flip-card').forEach(c => c.classList.remove('flipped'));
}

// ===================== 8. Timer Flip Digits =====================
function getDigitEl(n) { return document.getElementById('td' + n); }
function setDigit(n, val) {
  const el = getDigitEl(n);
  el.classList.remove('flip');
  void el.offsetWidth;
  el.textContent = val;
  el.classList.add('flip');
}
let timerVal = 0;
let autoTimer = null;
function tickTimer() {
  timerVal++;
  const mins = Math.floor(timerVal / 60);
  const secs = timerVal % 60;
  setDigit(1, Math.floor(mins / 10));
  setDigit(2, mins % 10);
  setDigit(3, Math.floor(secs / 10));
  setDigit(4, secs % 10);
}
function startAutoTick() {
  if (autoTimer) return;
  autoTimer = setInterval(tickTimer, 1000);
}
function stopAutoTick() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}

// ===================== 9. Mistake Dots =====================
let dotIdx = 0;
function failDot() {
  const dots = document.querySelectorAll('#dotsDemo .mistake-dot');
  if (dotIdx >= dots.length) return;
  const dot = dots[dotIdx];
  dot.classList.remove('fail');
  void dot.offsetWidth;
  dot.classList.add('fail');
  dotIdx++;
}
function resetDots() {
  document.querySelectorAll('#dotsDemo .mistake-dot').forEach(d => {
    d.classList.remove('fail');
    d.style.background = 'transparent';
    d.style.borderColor = '#555';
  });
  dotIdx = 0;
}

// ===================== 10. Particles =====================
function burstParticles() {
  const area = document.getElementById('particlesArea');
  const colors = ['#F9DF6D','#A0C35A','#B0C4EF','#BA81C5','#e94560','#fff'];
  area.innerHTML = '';
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 3 + Math.random() * 6;
    const angle = Math.random() * 2 * Math.PI;
    const dist = 40 + Math.random() * 80;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const left = 120 + Math.random() * 80;
    const top = 30 + Math.random() * 20;
    const delay = Math.random() * 0.1;
    p.style.cssText = 'width:' + size + 'px; height:' + size + 'px;' +
      'background:' + bgColor + ';' +
      'left:' + left + 'px; top:' + top + 'px;' +
      '--tx:' + tx + 'px; --ty:' + ty + 'px;' +
      'animation: particle-burst 0.6s ease-out forwards;' +
      'animation-delay: ' + delay + 's;';
    area.appendChild(p);
  }
  setTimeout(() => {
    area.innerHTML = '<span style="color:#555;">Pulsa "Explotar" para ver las partículas</span>';
  }, 1200);
}

// ===================== 11. Canvas Confetti =====================
function runConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const emojis = ['🎮','🎯','⚽','✨','🌟','⭐'];
  const colors = ['#F9DF6D','#A0C35A','#B0C4EF','#BA81C5','#e94560','#ff6b6b'];
  const pieces = [];
  const count = 80;

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 1.5 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 6,
      isEmoji: Math.random() < 0.2,
    });
  }

  let frame = 0;
  const maxFrames = 180;
  function draw() {
    if (frame >= maxFrames) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.vy += 0.02;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      if (p.isEmoji) {
        ctx.font = '16px serif';
        ctx.textAlign = 'center';
        ctx.fillText(emojis[Math.floor(Math.random() * emojis.length)], 0, 0);
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      }
      ctx.restore();
    });
    frame++;
    requestAnimationFrame(draw);
  }
  draw();
}
</script>
</body>
</html>`;

export async function onRequest() {
  return new Response(PAGE, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
}