export function generateResultImage(results, puzzleDate) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const W = 720;
  const H = 1280;
  canvas.width = W;
  canvas.height = H;

  const order = ['normal', 'jason', 'special'];
  const modeConfig = {
    normal: { icon: '🔗', label: 'Normal', maxMistakes: 4 },
    jason: { icon: '🧐', label: 'Dificil', maxMistakes: 3 },
    special: { icon: '⚽', label: 'Mundial 2026', maxMistakes: 4 },
  };
  const SQUARE_COLORS = ['#F9DF6D', '#A0C35A', '#B0C4EF', '#BA81C5'];

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0f0f23');
  bg.addColorStop(0.4, '#1a1a3e');
  bg.addColorStop(0.7, '#16213e');
  bg.addColorStop(1, '#0a0a1a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Decorative circles
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(W * 0.8, H * 0.15, 160, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.15, H * 0.85, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('PALABRAS CONECTADAS', W / 2, 110);

  // 4 large colored squares (adjacent)
  const bigSqSize = 64;
  const bigSqR = 10;
  const bigSqTotalW = 4 * bigSqSize;
  const bigSqStartX = (W - bigSqTotalW) / 2;
  const bigSqY = 155;
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = SQUARE_COLORS[i];
    ctx.shadowColor = SQUARE_COLORS[i];
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.roundRect(bigSqStartX + i * bigSqSize, bigSqY, bigSqSize, bigSqSize, bigSqR);
    ctx.fill();
  }
  ctx.shadowBlur = 0;

  // Filter played modes
  const played = order.filter(
    (mode) => results[mode] && results[mode].won !== undefined
  );
  if (played.length === 0) return canvas;

  // Each mode block: header row + 4 squares + gap = 64 + 16 + 36 + 16 = 132
  // Plus card padding: top 28, between last mode and bottom 24
  const SECTION_H = 164;
  const totalCardH = 28 + played.length * SECTION_H;
  const cardX = 36;
  const cardW = W - 72;
  let cardY = 265;

  // Glass card
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 40;
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, totalCardH, 24);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, totalCardH, 24);
  ctx.stroke();

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  for (let mi = 0; mi < played.length; mi++) {
    const mode = played[mi];
    const data = results[mode];
    const cfg = modeConfig[mode] || { icon: '🎮', label: mode, maxMistakes: 4 };
    const won = data.won;
    const mistakes = data.mistakes !== undefined ? data.mistakes : '?';
    const time = data.time !== undefined ? fmt(data.time) : '?:??';

    // === LEFT: icon + name ===
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(`${cfg.icon}  ${cfg.label}`, cardX + 28, cardY + 30);

    // === RIGHT: ✅ time\n   / X fallos ===
    const status = won ? '✅' : '❌';

    // Line 1: ✅ time
    ctx.textAlign = 'right';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#ffffff';
    const line1 = `${status} ${time}`;
    ctx.fillText(line1, cardX + cardW - 28, cardY + 26);

    // Line 2: / X fallos
    ctx.textAlign = 'right';
    ctx.font = 'bold 22px sans-serif';
    const line2 = `/ ${mistakes} fallos`;
    ctx.fillText(line2, cardX + cardW - 28, cardY + 54);

    cardY += 64;

    // 4 small colored squares
    const smallSqSize = 28;
    const smallSqGap = 10;
    const smallSqTotalW = 4 * smallSqSize + 3 * smallSqGap;
    const smallSqStartX = (W - smallSqTotalW) / 2;
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = SQUARE_COLORS[i];
      ctx.beginPath();
      ctx.roundRect(smallSqStartX + i * (smallSqSize + smallSqGap), cardY, smallSqSize, smallSqSize, 6);
      ctx.fill();
    }

    cardY += 50;

    // Separator between modes
    if (mi < played.length - 1) {
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cardX + 28, cardY);
      ctx.lineTo(cardX + cardW - 28, cardY);
      ctx.stroke();
      cardY += 14;
    }
  }

  // URL - white and big
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('laconexiondeldia.com', W / 2, H - 44);

  return canvas;
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

export function downloadResultImage(results, puzzleDate) {
  const canvas = generateResultImage(results, puzzleDate);
  const link = document.createElement('a');
  link.download = 'palabras-conectadas-resultados.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}