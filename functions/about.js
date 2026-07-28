// Cloudflare Pages Function — /about
// Página "Acerca de" con contenido sustancial para SEO y cumplimiento de AdSense

const ABOUT_PAGE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Acerca de Palabras Conectadas — El juego diario de conexiones de palabras en español</title>
  <meta name="description" content="Conoce la historia detrás de Palabras Conectadas, el primer juego diario de conexiones de palabras en español. Descubre cómo funciona, quiénes lo crearon y por qué es el mejor ejercicio mental diario." />
  <meta name="keywords" content="palabras conectadas acerca de, conexión del día historia, juego conexiones español, quién creó palabras conectadas" />
  <link rel="canonical" href="https://laconexiondeldia.com/about" />
  <meta property="og:title" content="Acerca de Palabras Conectadas" />
  <meta property="og:description" content="Conoce la historia detrás del primer juego diario de conexiones de palabras en español. Descubre cómo funciona y por qué es el mejor ejercicio mental diario." />
  <meta property="og:url" content="https://laconexiondeldia.com/about" />
  <meta property="og:type" content="website" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Acerca de Palabras Conectadas",
    "description": "Información sobre el juego diario de conexiones de palabras en español",
    "url": "https://laconexiondeldia.com/about",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Palabras Conectadas",
      "applicationCategory": "GameApplication",
      "operatingSystem": "All",
      "inLanguage": "es"
    }
  }
  </script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a1a2e;
      background: #f8f9fa;
    }
    .container { max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; color: #1a1a2e; }
    .subtitle { color: #666; margin-bottom: 2rem; font-size: 1.1rem; }
    h2 { font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem; color: #0f3460; }
    h3 { font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #333; }
    p { margin-bottom: 1rem; }
    ul, ol { margin-bottom: 1rem; padding-left: 1.5rem; }
    li { margin-bottom: 0.4rem; }
    .highlight {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border-left: 4px solid #F9DF6D;
    }
    .highlight.green { border-left-color: #A0C35A; }
    .highlight.blue { border-left-color: #B0C4EF; }
    .highlight.purple { border-left-color: #BA81C5; }
    .back-link {
      display: inline-block;
      margin-bottom: 1.5rem;
      color: #0f3460;
      text-decoration: none;
      font-weight: 600;
    }
    .back-link:hover { text-decoration: underline; }
    .cta {
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      color: white;
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      margin-top: 2.5rem;
    }
    .cta h2 { color: white; margin-top: 0; }
    .cta p { color: #ccc; }
    .cta-btn {
      display: inline-block;
      background: #e94560;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      margin-top: 1rem;
      transition: background 0.2s;
    }
    .cta-btn:hover { background: #d63851; }
    footer {
      text-align: center;
      padding: 2rem;
      color: #999;
      font-size: 0.85rem;
    }
    footer a { color: #666; text-decoration: underline; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 1.5rem 0;
    }
    .stat-card {
      background: white;
      border-radius: 10px;
      padding: 1.25rem;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: #0f3460;
      display: block;
    }
    .stat-label {
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.25rem;
    }
    @media (prefers-color-scheme: dark) {
      body { background: #0f0f23; color: #e0e0e0; }
      h1, h2 { color: #e0e0e0; }
      h2 { color: #87b0d9; }
      .subtitle { color: #999; }
      .highlight { background: #1a1a2e; }
      .stat-card { background: #1a1a2e; }
      .stat-number { color: #87b0d9; }
      .stat-label { color: #999; }
      .cta { background: linear-gradient(135deg, #0f0f23, #1a1a2e); }
      .back-link { color: #87b0d9; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="/" class="back-link">&larr; Volver al juego</a>
    <h1>Acerca de Palabras Conectadas</h1>
    <p class="subtitle">El primer juego diario de conexiones de palabras diseñado para la comunidad hispanohablante.</p>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">334+</span>
        <span class="stat-label">Puzzles disponibles</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">4</span>
        <span class="stat-label">Modos de juego</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">Abril</span>
        <span class="stat-label">Lanzamiento 2026</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">100%</span>
        <span class="stat-label">Gratuito</span>
      </div>
    </div>

    <h2>Nuestra historia</h2>
    <p>Palabras Conectadas nació en abril de 2026 con una misión clara: llevar el formato de conexiones de palabras —tan popular en otros idiomas— a la comunidad hispanohablante, con contenido original, culturalmente relevante y completamente en español.</p>
    <p>El juego fue creado por un equipo apasionado por los acertijos lingüísticos y la cultura de habla hispana, que identificó la falta de opciones de calidad en español para este tipo de entretenimiento mental diario. Cada puzzle es diseñado cuidadosamente para ofrecer un desafío equilibrado que estimule el pensamiento lateral y el vocabulario.</p>

    <div class="highlight">
      <h3>Nuestra filosofía</h3>
      <p>Creemos que los juegos de palabras no solo entretienen, sino que también ejercitan la mente, amplían el vocabulario y conectan a las personas a través del lenguaje. Por eso, cada puzzle de Palabras Conectadas está creado con esmero, asegurando que las categorías sean justas, interesantes y culturalmente significativas para los hablantes de español de todas las regiones.</p>
    </div>

    <h2>Cómo funciona el juego</h2>
    <p>El formato es simple pero profundo: cada día se publica un nuevo puzzle que consiste en 16 palabras que debes organizar en 4 grupos de 4 palabras cada uno. Cada grupo comparte un tema, categoría o conexión oculta. El desafío está en descubrir esas conexiones antes de agotar tus errores.</p>

    <div class="highlight green">
      <h3>Los cuatro niveles de dificultad</h3>
      <p>Cada categoría dentro de un puzzle tiene un nivel de dificultad representado por un color:</p>
      <ul>
        <li><strong>Amarillo (Fácil):</strong> la categoría más evidente. Generalmente sinónimos o palabras muy relacionadas que son fáciles de identificar.</li>
        <li><strong>Verde (Media):</strong> requiere un poco más de reflexión. Las conexiones son claras pero no inmediatamente obvias.</li>
        <li><strong>Azul (Difícil):</strong> conexiones más abstractas o que requieren conocimiento específico de vocabulario o cultura general.</li>
        <li><strong>Morado (Muy difícil):</strong> la categoría más creativa. Pueden ser juegos de palabras, referencias culturales, o conexiones inesperadas que desafían el pensamiento convencional.</li>
      </ul>
    </div>

    <h2>Modos de juego disponibles</h2>

    <div class="highlight blue">
      <h3>Modo Normal</h3>
      <p>El modo principal del juego. Incluye 16 palabras del puzzle más 4 palabras señuelo que no pertenecen a ninguna categoría. Tienes 4 errores permitidos. Ideal para jugadores de todos los niveles, desde principiantes hasta expertos que buscan un desafío diario equilibrado.</p>
    </div>

    <div class="highlight purple">
      <h3>Modo Difícil</h3>
      <p>Para los que buscan un reto mayor. Incluye 16 palabras del puzzle más 8 palabras señuelo que distraen y confunden. Solo tienes 3 errores permitidos. Las categorías suelen ser más elaboradas y requieren mayor pensamiento lateral. Recomendado para jugadores que ya dominan el modo normal.</p>
    </div>

    <div class="highlight blue">
      <h3>Modo Deportes</h3>
      <p>Un modo temático dedicado al mundo del deporte, con un tema distinto cada día que se muestra en la cabecera: fútbol (Real Madrid, Barça, Champions...), baloncesto (NBA, Lakers...), tenis, Fórmula 1, ciclismo, golf y mucho más. Son 16 palabras sin señuelos y 3 errores permitidos. Perfecto para los aficionados al deporte que quieren poner a prueba sus conocimientos.</p>
    </div>

    <div class="highlight">
      <h3>Edición Especial: Mundial 2026</h3>
      <p>Con motivo de la Copa del Mundo 2026, hemos creado una serie especial de 25 puzzles temáticos que rotan durante el torneo. Cada puzzle incluye categorías relacionadas con el fútbol, selecciones nacionales, jugadores históricos, estadios y términos futboleros. Contenido exclusivo disponible solo durante la temporada mundialista.</p>
    </div>

    <h2>Características del juego</h2>
    <p>Palabras Conectadas ofrece una experiencia completa con las siguientes funcionalidades:</p>
    <ul>
      <li><strong>Puzzle diario:</strong> un nuevo desafío cada día a las 00:00 hora local, igual para todos los jugadores.</li>
      <li><strong>Archivo completo:</strong> acceso a todos los puzzles desde el lanzamiento, con un calendario visual para navegar por fechas.</li>
      <li><strong>Estadísticas detalladas:</strong> seguimiento de rachas, número de puzzles completados, distribución de errores y tiempos de resolución.</li>
      <li><strong>Desafío entre amigos:</strong> genera un enlace único para retar a un amigo a resolver el mismo puzzle y comparar resultados.</li>
      <li><strong>Compartir resultados:</strong> publica tu resultado en WhatsApp y X (Twitter) con un formato visual de colores.</li>
      <li><strong>Modo oscuro:</strong> tema claro y oscuro para jugar cómodamente en cualquier momento del día.</li>
      <li><strong>Instalable como app:</strong> funciona como aplicación web progresiva (PWA) y puede instalarse en la pantalla de inicio del teléfono.</li>
      <li><strong>Sonidos y animaciones:</strong> efectos visuales y sonoros que hacen la experiencia más inmersiva.</li>
      <li><strong>Modo práctica:</strong> juega puzzles de práctica semanales sin que afecten tus estadísticas.</li>
    </ul>

    <h2>Nuestro compromiso con la calidad</h2>
    <p>Cada puzzle de Palabras Conectadas es creado manualmente por nuestro equipo editorial. Nos aseguramos de que:</p>
    <ul>
      <li>Todas las palabras sean de uso común en el mundo hispanohablante, evitando regionalismos excesivos.</li>
      <li>Las categorías sean temáticamente coherentes y justas.</li>
      <li>No haya ambigüedades o palabras que puedan pertenecer a múltiples categorías dentro del mismo puzzle (a menos que sea intencional para aumentar la dificultad).</li>
      <li>Cada puzzle ofrezca un equilibrio entre categorías fáciles y difíciles.</li>
    </ul>

    <h2>Privacidad y transparencia</h2>
    <p>Tomamos la privacidad de nuestros usuarios muy en serio. Palabras Conectadas no recopila información personal sin consentimiento explícito. Los datos de juego se almacenan localmente en tu navegador. La sincronización en la nube es opcional y utiliza un identificador anónimo. Puedes leer nuestra <a href="/privacy/">Política de Privacidad</a> completa para más detalles.</p>

    <div class="cta">
      <h2>¿Listo para el desafío de hoy?</h2>
      <p>Un nuevo puzzle te espera cada día. Demuestra tu habilidad con las palabras.</p>
      <a href="/" class="cta-btn">Jugar ahora</a>
    </div>
  </div>

  <footer>
    <p><a href="/">Palabras Conectadas</a> &mdash; Juego diario de conexiones de palabras en español</p>
    <p><a href="/tips/">Consejos y trucos</a> | <a href="/blog/">Blog</a> | <a href="/privacy/">Política de privacidad</a></p>
  </footer>
</body>
</html>`;

export async function onRequest() {
  return new Response(ABOUT_PAGE, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}
