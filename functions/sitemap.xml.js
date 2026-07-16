// Cloudflare Pages Function — /sitemap.xml
// Genera un sitemap dinámico con todas las URLs del sitio

const SITE_URL = 'https://laconexiondeldia.com';
const LAUNCH_DATE = new Date(2026, 5, 15); // June 15, 2026

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getDateRange() {
  const today = new Date();
  const dates = [];
  const current = new Date(LAUNCH_DATE);
  while (current <= today) {
    dates.push(formatDate(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

export async function onRequest() {
  const dates = getDateRange();
  const today = formatDate(new Date());
  const nowDate = new Date();

  const urls = [
    // Static pages
    { loc: '/', priority: '1.0', changefreq: 'daily', lastmod: today },
    { loc: '/tips', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/blog', priority: '0.7', changefreq: 'weekly', lastmod: today },
    { loc: '/about', priority: '0.6', changefreq: 'monthly', lastmod: today },
    { loc: '/como-jugar', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/faq', priority: '0.6', changefreq: 'monthly', lastmod: today },
    { loc: '/privacy/', priority: '0.3', changefreq: 'monthly', lastmod: today },
  ];

  // Puzzle archive pages
  for (const date of dates) {
    urls.push({
      loc: `/puzzle/${date}`,
      priority: date === today ? '1.0' : '0.6',
      changefreq: 'monthly',
      lastmod: date,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}