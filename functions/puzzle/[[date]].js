const SITE_URL = 'https://laconexiondeldia.com';
const LAUNCH_DATE = new Date(2026, 5, 15);

function isValidDate(dateStr) {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const y = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const d = parseInt(match[3], 10);
  const date = new Date(y, m - 1, d);
  return date >= LAUNCH_DATE && date <= new Date() &&
    date.getFullYear() === y &&
    date.getMonth() === m - 1 &&
    date.getDate() === d;
}

function formatDateEs(dateStr) {
  const parts = dateStr.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ];
  return `${d} de ${months[m - 1]} de ${y}`;
}

function getPuzzleOfDay(dateStr) {
  const seed = parseInt(dateStr.replace(/-/g, ''), 10);
  const index = Math.abs(seed * 16807) % 150;
  return index + 1;
}

export async function onRequest(context) {
  // [[date]] catch-all returns an array; unwrap it
  const dateStr = context.params.date[0];

  if (!isValidDate(dateStr)) {
    return Response.redirect(SITE_URL, 302);
  }

  const dateFormatted = formatDateEs(dateStr);
  const puzzleNum = getPuzzleOfDay(dateStr);
  const title = `Palabras Conectadas — ${dateFormatted} | Puzzle del Día`;
  const description = `Juega al puzzle de conexiones de palabras del ${dateFormatted}. Encuentra los 4 grupos de 4 palabras relacionados. Puzzle #${puzzleNum} en español.`;
  const canonical = `${SITE_URL}/puzzle/${dateStr}`;

  const url = new URL(context.request.url);
  const indexUrl = `${url.protocol}//${url.host}/index.html`;
  const response = await context.env.ASSETS.fetch(indexUrl);
  let html = await response.text();

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${title}</title>`
  );

  const metaDesc = `<meta name="description" content="${description}" />`;
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      metaDesc
    );
  } else {
    html = html.replace('</title>', `</title>\n  ${metaDesc}`);
  }

  html = html.replace(
    /<link rel="canonical"[^>]*\/>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  html = html.replace(
    /<meta property="og:title"[^>]*\/>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta property="og:description"[^>]*\/>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(
    /<meta property="og:url"[^>]*\/>/,
    `<meta property="og:url" content="${canonical}" />`
  );

  html = html.replace(
    /<meta name="twitter:title"[^>]*\/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description"[^>]*\/>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  const breadcrumb = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "${SITE_URL}/" },
      { "@type": "ListItem", "position": 2, "name": "Archivo", "item": "${SITE_URL}/?date=${dateStr}" },
      { "@type": "ListItem", "position": 3, "name": "${dateFormatted}", "item": "${canonical}" }
    ]
  }
  </script>`;
  html = html.replace('</head>', `${breadcrumb}</head>`);

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}