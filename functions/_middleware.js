// Cloudflare Pages Middleware
// Inyecta Google Analytics desde variable de entorno GA_MEASUREMENT_ID

export async function onRequest(context) {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const gaId = context.env.GA_MEASUREMENT_ID;
  if (!gaId) {
    return response;
  }

  const html = await response.text();
  const gaScript = `
  <!-- Google Analytics (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  </script>`;

  const modified = html.replace('</head>', `${gaScript}</head>`);
  return new Response(modified, {
    status: response.status,
    headers: response.headers,
  });
}