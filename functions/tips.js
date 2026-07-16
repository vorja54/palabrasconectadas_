// Cloudflare Pages Function — /tips
// Página SEO con consejos para resolver puzzles de Palabras Conectadas

const TIPS_PAGE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Consejos y trucos para Palabras Conectadas — Mejora tu juego</title>
  <meta name="description" content="Aprende a resolver los puzzles de Palabras Conectadas como un experto. Estrategias, trucos y consejos para encontrar las 4 categorías ocultas cada día. Guía completa para principiantes y avanzados." />
  <meta name="keywords" content="palabras conectadas consejos, cómo jugar connections, trucos puzzle palabras, conexión del día, estrategia connections español, cómo resolver conexiones palabras" />
  <link rel="canonical" href="https://laconexiondeldia.com/tips" />
  <meta property="og:title" content="Consejos y trucos para Palabras Conectadas" />
  <meta property="og:description" content="Aprende a resolver los puzzles de Palabras Conectadas como un experto. Estrategias, trucos y consejos para encontrar las 4 categorías ocultas cada día." />
  <meta property="og:url" content="https://laconexiondeldia.com/tips" />
  <meta property="og:type" content="article" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Consejos y trucos para Palabras Conectadas",
    "description": "Guía completa con estrategias, trucos y consejos para resolver los puzzles de Palabras Conectadas como un experto.",
    "author": { "@type": "Organization", "name": "Palabras Conectadas" },
    "datePublished": "2026-06-15",
    "dateModified": "2026-07-02",
    "inLanguage": "es",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://laconexiondeldia.com/tips" }
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
    .tip-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border-left: 4px solid #e94560;
    }
    .tip-card.green { border-left-color: #2ecc71; }
    .tip-card.blue { border-left-color: #3498db; }
    .tip-card.purple { border-left-color: #9b59b6; }
    .tag {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .tag-yellow { background: #F9DF6D; color: #333; }
    .tag-green { background: #A0C35A; color: #333; }
    .tag-blue { background: #B0C4EF; color: #1a1a2e; }
    .tag-purple { background: #BA81C5; color: #fff; }
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
    @media (prefers-color-scheme: dark) {
      body { background: #0f0f23; color: #e0e0e0; }
      h1, h2 { color: #e0e0e0; }
      h2 { color: #87b0d9; }
      .subtitle { color: #999; }
      .tip-card { background: #1a1a2e; }
      .cta { background: linear-gradient(135deg, #0f0f23, #1a1a2e); }
      .back-link { color: #87b0d9; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="/" class="back-link">&larr; Volver al juego</a>
    <h1>Consejos y trucos para Palabras Conectadas</h1>
    <p class="subtitle">Domina el arte de encontrar las 4 categorías ocultas. Estrategias para todos los niveles, desde principiante hasta experto.</p>

    <div class="tip-card">
      <span class="tag tag-yellow">Principiante</span>
      <h3>1. Empieza por lo obvio</h3>
      <p>Busca grupos muy evidentes: colores, números, frutas, animales, países. Estas categorías suelen ser las más fáciles (amarillas) y te darán impulso para el resto del puzzle.</p>
      <ul>
        <li>Examina visualmente todas las palabras buscando patrones claros.</li>
        <li>Selecciona primero las 4 palabras que parezcan la categoría más simple.</li>
        <li>No te preocupes por el tiempo al principio — la práctica te hará más rápido.</li>
      </ul>
    </div>

    <div class="tip-card green">
      <span class="tag tag-green">Intermedio</span>
      <h3>2. Busca palabras con doble sentido</h3>
      <p>Muchos puzzles usan palabras que pueden pertenecer a múltiples categorías. Una palabra como "banco" puede ser un asiento, una institución financiera o un lugar en el río. Identificar estos significados alternativos es clave para resolver las categorías más difíciles.</p>
      <ul>
        <li>Si una palabra parece fuera de lugar, probablemente tiene un significado alternativo.</li>
        <li>Agrupa mentalmente las palabras por todos sus significados posibles.</li>
        <li>Las categorías moradas (difíciles) suelen jugar con significados menos comunes y juegos de palabras.</li>
      </ul>
    </div>

    <div class="tip-card blue">
      <span class="tag tag-blue">Avanzado</span>
      <h3>3. Usa el botón "Mezclar" estratégicamente</h3>
      <p>A veces, cambiar el orden de las palabras ayuda a ver conexiones que antes no notabas. Es una herramienta poderosa, no solo un botón de emergencia. La disposición visual de las palabras influye en cómo procesamos las relaciones entre ellas.</p>
      <ul>
        <li>Después de resolver 1 o 2 categorías, mezcla las palabras restantes.</li>
        <li>Una nueva disposición puede revelar patrones que estabas ignorando.</li>
        <li>Si llevas un rato sin progreso, mezclar reactiva tu capacidad de observación.</li>
      </ul>
    </div>

    <div class="tip-card purple">
      <span class="tag tag-purple">Experto</span>
      <h3>4. Identifica el tema de cada categoría</h3>
      <p>Las categorías en Palabras Conectadas tienen temas específicos. Pregúntate: "¿Qué EXACTAMENTE tienen en común estas 4 palabras?"</p>
      <ul>
        <li>Las categorías amarillas son las más directas (sinónimos evidentes o palabras de la misma familia).</li>
        <li>Las verdes requieren un poco más de pensamiento abstracto o asociaciones menos directas.</li>
        <li>Las azules suelen involucrar palabras asociadas a un contexto específico (por ejemplo, partes de un objeto, términos de una profesión).</li>
        <li>Las moradas son las más creativas — pueden ser juegos de palabras, referencias culturales, palabras que comparten un prefijo o sufijo, o conexiones temáticas inesperadas.</li>
      </ul>
    </div>

    <h2>Estrategias generales</h2>

    <div class="tip-card">
      <h3>Eliminación por prueba y error</h3>
      <p>Si tienes 4 palabras que parecen encajar pero no estás seguro, ¡inténtalo! En el peor caso, pierdes un intento, pero ganas información valiosa. A veces, ver qué combinaciones NO funcionan es la mejor pista para encontrar las que SÍ funcionan. Este método de eliminación es especialmente útil cuando tienes varias palabras que podrían pertenecer a diferentes categorías.</p>
    </div>

    <div class="tip-card green">
      <h3>Atención a las palabras señuelo</h3>
      <p>En el modo Normal hay 4 palabras señuelo y en el modo Difícil hay 8. Estas palabras NO pertenecen a ninguna categoría y están diseñadas específicamente para distraerte. Si una palabra causa mucha confusión o parece encajar en varias categorías sin terminar de convencer, considera seriamente que puede ser un señuelo.</p>
      <p>Consejo práctico: si identificaste 3 palabras que claramente combinan y la cuarta candidata no encaja del todo, puede que la cuarta sea un señuelo. Concéntrate en las palabras que sí parecen tener conexiones claras entre sí.</p>
    </div>

    <div class="tip-card blue">
      <h3>Juega a diario</h3>
      <p>Como cualquier habilidad, resolver conexiones de palabras mejora con la práctica constante. Jugar a diario te ayuda a:</p>
      <ul>
        <li>Reconocer patrones comunes más rápidamente</li>
        <li>Ampliar tu vocabulario y conocimiento de significados alternativos</li>
        <li>Desarrollar intuición para categorías creativas y juegos de palabras</li>
        <li>Mejorar tu tiempo de resolución</li>
        <li>Entrenar tu cerebro para pensar de manera lateral y encontrar conexiones no obvias</li>
      </ul>
    </div>

    <div class="tip-card purple">
      <h3>Modo Difícil: el desafío definitivo</h3>
      <p>El modo Difícil incluye 8 palabras señuelo adicionales (24 palabras en total en pantalla) y solo 3 errores permitidos. Es ideal para jugadores que ya dominan el modo normal y buscan un desafío mayor. Las categorías también tienden a ser más complejas. Actívalo desde el botón naranja en la pantalla principal del juego.</p>
    </div>

    <h2>Técnicas avanzadas para jugadores experimentados</h2>

    <div class="tip-card purple">
      <h3>Análisis de patrones lingüísticos</h3>
      <p>Las categorías más difíciles a menudo se basan en aspectos lingüísticos más que semánticos. Presta atención a:</p>
      <ul>
        <li><strong>Prefijos y sufijos:</strong> palabras que comparten "re-", "sub-", "-ción", "-mente", etc.</li>
        <li><strong>Palabras compuestas:</strong> términos que se forman con las mismas raíces.</li>
        <li><strong>Homófonos:</strong> palabras que suenan igual pero tienen diferente significado.</li>
        <li><strong>Palabras que pueden ser verbos y sustantivos:</strong> como "canta", "corre", "salta".</li>
        <li><strong>Campos semánticos específicos:</strong> términos de la cocina, la música, la medicina, los deportes, etc.</li>
      </ul>
    </div>

    <div class="tip-card blue">
      <h3>Estrategia de aproximación inversa</h3>
      <p>Cuando estés atascado, prueba a identificar primero qué palabras NO pueden estar juntas. A veces, descartar combinaciones incorrectas es más fácil que encontrar las correctas. Este método funciona especialmente bien cuando te quedan pocas palabras y varias categorías sin resolver.</p>
    </div>

    <div class="tip-card green">
      <h3>Gestión de errores</h3>
      <p>En el modo Normal tienes 4 errores, y en el modo Difícil solo 3. Administra tus intentos sabiamente:</p>
      <ul>
        <li>No desperdicies intentos en combinaciones que no te generen información útil.</li>
        <li>Si tienes una fuerte corazonada, vale la pena arriesgar un error, especialmente si te acerca a resolver una categoría.</li>
        <li>Cuando te quede solo 1 error, sé más conservador. Asegúrate de tener alta confianza antes de enviar.</li>
      </ul>
    </div>

    <h2>Errores comunes que debes evitar</h2>

    <div class="tip-card">
      <h3>El error de la primera impresión</h3>
      <p>Es fácil dejarse llevar por la primera conexión que vemos, pero a veces es engañosa. Por ejemplo, si ves "manzana, pera, uva, plátano" todas son frutas, pero quizás la categoría real es "frutas tropicales" o "frutas de postre". Tómate un momento para verificar que las 4 palabras encajan EXACTAMENTE en el mismo tema.</p>
    </div>

    <div class="tip-card green">
      <h3>Ignorar las palabras señuelo</h3>
      <p>El error más común entre principiantes es asumir que todas las palabras pertenecen a alguna categoría. Recuerda: siempre hay palabras que no pertenecen a ningún grupo. Si una palabra no encaja en ninguna parte, probablemente es un señuelo.</p>
    </div>

    <div class="cta">
      <h2>¿Listo para ponerlo en práctica?</h2>
      <p>Un nuevo puzzle te espera cada día. Demuestra todo lo que has aprendido con estos consejos.</p>
      <a href="/" class="cta-btn">Jugar ahora</a>
    </div>

    <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #ddd;">
      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuántos errores puedo cometer?</h3>
      <p>En el modo normal tienes 4 errores permitidos. En el modo Difícil tienes 3 errores. Si fallas 4 veces en modo normal o 3 en modo Difícil, el juego termina y se revelan las soluciones de todas las categorías.</p>

      <h3>¿Puedo jugar puzzles de días anteriores?</h3>
      <p>Sí. Usa el calendario (icono de archivo en la esquina superior izquierda) para acceder a todos los puzzles desde el lanzamiento. Cada puzzle anterior es tan desafiante como el del día actual.</p>

      <h3>¿Qué significan los colores de las categorías?</h3>
      <p>Los colores indican la dificultad de cada grupo: <strong>amarillo</strong> (más fácil, categoría directa), <strong>verde</strong> (dificultad media), <strong>azul</strong> (difícil, requiere pensamiento abstracto), <strong>morado</strong> (el más complicado, suele involucrar juegos de palabras o referencias culturales).</p>

      <h3>¿Cómo funciona el modo desafío?</h3>
      <p>Después de completar un puzzle, puedes generar un enlace para desafiar a un amigo haciendo clic en "Desafiar a un amigo". Ambos juegan el mismo puzzle y pueden comparar resultados, incluyendo tiempo de resolución y número de errores.</p>

      <h3>¿El modo práctica afecta mis estadísticas?</h3>
      <p>No. El modo práctica te permite jugar puzzles de prueba sin que los resultados afecten tus estadísticas, rachas o historial. Es ideal para mejorar tus habilidades sin presión.</p>

      <h3>¿Hay puzzles especiales por temporadas?</h3>
      <p>Sí. Durante la Copa del Mundo 2026, estamos publicando puzzles temáticos de la edición Mundial. También tenemos puzzles especiales en fechas señaladas como días festivos y efemérides.</p>
    </div>
  </div>

  <footer>
    <p><a href="/">Palabras Conectadas</a> — Juego diario de conexiones de palabras en español</p>
    <p><a href="/blog/">Blog</a> | <a href="/about/">Acerca de</a> | <a href="/privacy/">Política de privacidad</a></p>
  </footer>
</body>
</html>`;

export async function onRequest() {
  return new Response(TIPS_PAGE, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}