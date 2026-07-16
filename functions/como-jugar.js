// Cloudflare Pages Function — /como-jugar
// Página detallada de cómo jugar Palabras Conectadas — contenido SEO sustancial

const COMO_JUGAR_PAGE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cómo jugar Palabras Conectadas — Guía completa con ejemplos</title>
  <meta name="description" content="Guía completa y detallada de cómo jugar Palabras Conectadas. Aprende las reglas, los modos de juego, los niveles de dificultad y las estrategias básicas con ejemplos prácticos." />
  <meta name="keywords" content="cómo jugar palabras conectadas, reglas conexión del día, tutorial connections español, guía palabras conectadas, cómo se juega" />
  <link rel="canonical" href="https://laconexiondeldia.com/como-jugar" />
  <meta property="og:title" content="Cómo jugar Palabras Conectadas — Guía completa" />
  <meta property="og:description" content="Guía completa de cómo jugar Palabras Conectadas. Reglas, modos, dificultades y estrategias." />
  <meta property="og:url" content="https://laconexiondeldia.com/como-jugar" />
  <meta property="og:type" content="article" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo jugar Palabras Conectadas — Guía completa",
    "description": "Aprende todo sobre Palabras Conectadas: reglas, modos de juego, niveles de dificultad y estrategias.",
    "author": { "@type": "Organization", "name": "Palabras Conectadas" },
    "datePublished": "2026-06-15",
    "dateModified": "2026-07-02",
    "inLanguage": "es",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://laconexiondeldia.com/como-jugar" }
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
    .card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border-left: 4px solid #F9DF6D;
    }
    .card.green { border-left-color: #A0C35A; }
    .card.blue { border-left-color: #B0C4EF; }
    .card.purple { border-left-color: #BA81C5; }
    .card.red { border-left-color: #e94560; }
    .back-link {
      display: inline-block;
      margin-bottom: 1.5rem;
      color: #0f3460;
      text-decoration: none;
      font-weight: 600;
    }
    .back-link:hover { text-decoration: underline; }
    .step {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      margin-bottom: 1.25rem;
    }
    .step-num {
      background: #0f3460;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .step-content { flex: 1; }
    .step-content h3 { margin-top: 0; }
    .color-demo {
      display: inline-block;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
    }
    .color-yellow { background: #F9DF6D; color: #333; }
    .color-green { background: #A0C35A; color: #333; }
    .color-blue { background: #B0C4EF; color: #1a1a2e; }
    .color-purple { background: #BA81C5; color: #fff; }
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
      .card { background: #1a1a2e; }
      .step-num { background: #87b0d9; color: #1a1a2e; }
      .cta { background: linear-gradient(135deg, #0f0f23, #1a1a2e); }
      .back-link { color: #87b0d9; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="/" class="back-link">&larr; Volver al juego</a>
    <h1>Cómo jugar Palabras Conectadas</h1>
    <p class="subtitle">Guía completa con reglas, ejemplos y estrategias para convertirte en un maestro de las conexiones de palabras.</p>

    <h2>¿Qué es Palabras Conectadas?</h2>
    <p>Palabras Conectadas es un juego diario de conexiones de palabras en español. Cada día se publica un nuevo desafío que consiste en encontrar 4 grupos ocultos de 4 palabras que comparten un tema o categoría común. Además de las 16 palabras del puzzle, aparecen palabras adicionales llamadas <strong>señuelos</strong> que no pertenecen a ninguna categoría y están diseñadas para confundirte.</p>

    <h2>Cómo se juega: paso a paso</h2>

    <div class="step">
      <div class="step-num">1</div>
      <div class="step-content">
        <h3>Observa todas las palabras</h3>
        <p>En la pantalla verás entre 20 y 24 palabras (dependiendo del modo de juego) organizadas en una cuadrícula. Tómate un momento para leerlas todas y busca patrones, temas comunes o palabras que parezcan estar relacionadas entre sí.</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">2</div>
      <div class="step-content">
        <h3>Selecciona 4 palabras</h3>
        <p>Toca o haz clic en 4 palabras que creas que pertenecen al mismo grupo. Las palabras seleccionadas se resaltarán visualmente. Si te equivocas, puedes tocar una palabra seleccionada para deseleccionarla.</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">3</div>
      <div class="step-content">
        <h3>Presiona "Enviar"</h3>
        <p>Una vez que hayas seleccionado exactamente 4 palabras, presiona el botón "Enviar" (o la tecla Enter en tu teclado). El juego verificará si las 4 palabras pertenecen a la misma categoría oculta.</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">4</div>
      <div class="step-content">
        <h3>¡Acierta o falla!</h3>
        <p><strong>Si aciertas:</strong> las 4 palabras se agruparán y se revelará el nombre de su categoría con un color distintivo que indica su dificultad.</p>
        <p><strong>Si fallas:</strong> perderás un intento. Si el grupo que seleccionaste tenía 3 palabras correctas y 1 incorrecta, verás el mensaje "¡Falta uno!" como pista. ¡Sigue intentando!</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">5</div>
      <div class="step-content">
        <h3>Gana o pierde</h3>
        <p><strong>Ganas</strong> cuando identificas los 4 grupos de palabras antes de agotar tus errores. <strong>Pierdes</strong> si agotas todos tus errores sin resolver las 4 categorías. En cualquier caso, al final podrás ver todas las soluciones, compartir tu resultado y desafiar a tus amigos.</p>
      </div>
    </div>

    <h2>Niveles de dificultad de las categorías</h2>
    <p>Cada categoría resuelta muestra un color que indica su nivel de dificultad:</p>

    <div class="card">
      <h3><span class="color-demo color-yellow">Fácil</span> — Color amarillo</h3>
      <p>Son las categorías más evidentes. Suelen incluir sinónimos directos, palabras del mismo campo semántico muy claro, o listas obvias (colores, días de la semana, números, frutas, animales domésticos, etc.). Estas categorías son ideales para resolver primero y ganar impulso.</p>
      <p><strong>Ejemplo:</strong> "rojo, azul, verde, amarillo" → Categoría: <em>Colores básicos</em></p>
    </div>

    <div class="card green">
      <h3><span class="color-demo color-green">Media</span> — Color verde</h3>
      <p>Categorías que requieren un poco más de reflexión. Las conexiones son claras pero no inmediatamente obvias. Pueden involucrar sinónimos menos comunes o asociaciones temáticas que requieren conocimiento general.</p>
      <p><strong>Ejemplo:</strong> "guitarra, piano, batería, violín" → Categoría: <em>Instrumentos musicales</em></p>
    </div>

    <div class="card blue">
      <h3><span class="color-demo color-blue">Difícil</span> — Color azul</h3>
      <p>Categorías que requieren pensamiento más abstracto. Las palabras pueden estar asociadas a un contexto específico, como términos de una profesión, partes de un objeto, o conceptos de una disciplina particular.</p>
      <p><strong>Ejemplo:</strong> "brújula, mapa, carpa, binoculares" → Categoría: <em>Equipo de campamento</em></p>
    </div>

    <div class="card purple">
      <h3><span class="color-demo color-purple">Muy difícil</span> — Color morado</h3>
      <p>Las categorías más creativas y desafiantes. Pueden involucrar juegos de palabras, referencias culturales, palabras que comparten un prefijo o sufijo, homófonos, o conexiones temáticas sorprendentes. Requieren pensamiento lateral y creatividad.</p>
      <p><strong>Ejemplo:</strong> "banco, sierra, hoja, muñeca" → Categoría: <em>Palabras con doble significado (objeto/parte del cuerpo o naturaleza)</em></p>
    </div>

    <h2>Modos de juego</h2>

    <div class="card">
      <h3>Modo Normal</h3>
      <p>El modo principal del juego. Incluye 16 palabras del puzzle más 4 palabras señuelo (20 palabras en total en pantalla). Tienes 4 errores permitidos. Las categorías están balanceadas para ofrecer una experiencia desafiante pero accesible para jugadores de todos los niveles. Es el modo recomendado para empezar.</p>
    </div>

    <div class="card red">
      <h3>Modo Difícil</h3>
      <p>Para los que buscan un reto mayor. Incluye 16 palabras del puzzle más 8 palabras señuelo (24 palabras totales en pantalla). Solo tienes 3 errores permitidos. Las palabras señuelo adicionales hacen que identificar las categorías reales sea mucho más complejo. Recomendado para jugadores que ya dominan el modo Normal.</p>
    </div>

    <div class="card blue">
      <h3>Edición Especial: Mundial 2026</h3>
      <p>Durante la Copa del Mundo 2026, hemos creado puzzles temáticos especiales con categorías relacionadas con el fútbol: selecciones nacionales, jugadores históricos, estadios icónicos, términos futboleros, y más. Estos puzzles rotan durante el torneo y son contenido exclusivo por tiempo limitado.</p>
    </div>

    <h2>Controles y atajos de teclado</h2>
    <p>Palabras Conectadas ofrece varios controles para facilitar la experiencia de juego:</p>
    <ul>
      <li><strong>Clic/Tap:</strong> selecciona o deselecciona una palabra.</li>
      <li><strong>Botón Enviar:</strong> envía las 4 palabras seleccionadas para verificar si forman una categoría.</li>
      <li><strong>Botón Mezclar:</strong> reordena aleatoriamente las palabras en la cuadrícula. Útil cuando necesitas una nueva perspectiva.</li>
      <li><strong>Botón Deseleccionar:</strong> limpia todas las palabras seleccionadas actualmente.</li>
      <li><strong>Tecla Enter:</strong> atajo de teclado para enviar las palabras seleccionadas.</li>
      <li><strong>Tecla Retroceso (Backspace):</strong> atajo de teclado para deseleccionar todas las palabras.</li>
    </ul>

    <h2>Estrategias básicas para empezar</h2>
    <p>Si eres nuevo en el juego, aquí tienes algunas estrategias que te ayudarán a resolver los puzzles:</p>
    <ul>
      <li><strong>Busca categorías obvias primero:</strong> identifica grupos claros como colores, animales, países o frutas. Resolverlos te dará impulso y reducirá las opciones.</li>
      <li><strong>Identifica palabras señuelo:</strong> si una palabra no encaja en ninguna parte, probablemente es un señuelo. Ignórala y concéntrate en las demás.</li>
      <li><strong>Presta atención a los dobles significados:</strong> palabras como "banco", "sierra", "carta" o "muñeca" tienen múltiples significados. Las categorías difíciles suelen aprovechar esto.</li>
      <li><strong>Usa el botón Mezclar:</strong> cambiar el orden de las palabras puede revelar conexiones que no veías antes.</li>
      <li><strong>Aprende de cada error:</strong> cada intento fallido te da información sobre qué combinaciones no funcionan.</li>
    </ul>
    <p>Para estrategias más avanzadas, consulta nuestra <a href="/tips/">página de consejos y trucos</a>.</p>

    <h2>Otras funcionalidades</h2>

    <div class="card green">
      <h3>Archivo de puzzles anteriores</h3>
      <p>Puedes acceder a todos los puzzles desde el lanzamiento del juego usando el icono de calendario en la esquina superior izquierda. El archivo incluye un calendario visual para navegar por fechas. Todos los puzzles anteriores ofrecen la misma experiencia que el puzzle del día.</p>
    </div>

    <div class="card blue">
      <h3>Modo Práctica</h3>
      <p>El modo práctica te permite jugar puzzles de prueba sin que los resultados afecten tus estadísticas o rachas. Es ideal para practicar estrategias nuevas, familiarizarte con el juego, o simplemente jugar más sin presión.</p>
    </div>

    <div class="card purple">
      <h3>Compartir y desafiar</h3>
      <p>Comparte tus resultados en WhatsApp y X (Twitter) con un formato visual de colores. También puedes generar un enlace de desafío único para competir con amigos: ambos juegan el mismo puzzle y comparan resultados, incluyendo tiempo y errores.</p>
    </div>

    <div class="cta">
      <h2>¿Listo para jugar?</h2>
      <p>Ya sabes todo lo necesario para empezar. El puzzle de hoy te espera.</p>
      <a href="/" class="cta-btn">Jugar ahora</a>
    </div>
  </div>

  <footer>
    <p><a href="/">Palabras Conectadas</a> — Juego diario de conexiones de palabras en español</p>
    <p><a href="/tips/">Consejos y trucos</a> | <a href="/blog/">Blog</a> | <a href="/about/">Acerca de</a> | <a href="/faq/">FAQ</a> | <a href="/privacy/">Privacidad</a></p>
  </footer>
</body>
</html>`;

export async function onRequest() {
  return new Response(COMO_JUGAR_PAGE, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}