// Cloudflare Pages Function — /faq
// Página de preguntas frecuentes independiente con contenido sustancial para SEO y AdSense

const FAQ_PAGE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preguntas Frecuentes — Palabras Conectadas</title>
  <meta name="description" content="Respuestas a las preguntas más frecuentes sobre Palabras Conectadas. Todo lo que necesitas saber sobre el juego diario de conexiones de palabras en español." />
  <meta name="keywords" content="palabras conectadas faq, preguntas frecuentes conexión del día, cómo funciona palabras conectadas, dudas juego conexiones" />
  <link rel="canonical" href="https://laconexiondeldia.com/faq" />
  <meta property="og:title" content="Preguntas Frecuentes — Palabras Conectadas" />
  <meta property="og:description" content="Todo lo que necesitas saber sobre el juego diario de conexiones de palabras en español." />
  <meta property="og:url" content="https://laconexiondeldia.com/faq" />
  <meta property="og:type" content="website" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cada cuándo hay un puzzle nuevo?",
        "acceptedAnswer": { "@type": "Answer", "text": "Cada día a las 00:00 hora local se publica un nuevo puzzle. Todos los jugadores ven la misma combinación." }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos errores puedo cometer?",
        "acceptedAnswer": { "@type": "Answer", "text": "En modo Normal tienes 4 errores. En modo Difícil tienes 3 errores. En modo Deportes tienes 3 errores." }
      },
      {
        "@type": "Question",
        "name": "¿Palabras Conectadas es gratuito?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sí, Palabras Conectadas es completamente gratuito y siempre lo será." }
      },
      {
        "@type": "Question",
        "name": "¿Puedo jugar en mi teléfono?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sí, funciona en cualquier navegador y se puede instalar como app PWA." }
      },
      {
        "@type": "Question",
        "name": "¿Se guarda mi progreso si cierro el juego?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sí, el progreso se guarda automáticamente en tu navegador y puedes retomarlo después." }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona el modo Desafío?",
        "acceptedAnswer": { "@type": "Answer", "text": "Completa el puzzle y genera un enlace único para retar a un amigo al mismo puzzle." }
      },
      {
        "@type": "Question",
        "name": "¿Qué significan los colores de las categorías?",
        "acceptedAnswer": { "@type": "Answer", "text": "Amarillo (fácil), verde (medio), azul (difícil), morado (muy difícil/creativo)." }
      }
    ]
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
    .faq-item {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .faq-item h3 {
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      color: #0f3460;
      cursor: default;
    }
    .faq-item p { color: #555; font-size: 0.95rem; }
    .faq-item ul { margin-top: 0.5rem; padding-left: 1.25rem; }
    .faq-item li { color: #555; font-size: 0.95rem; margin-bottom: 0.3rem; }
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
    .category { color: #e94560; margin-top: 2rem; margin-bottom: 1rem; font-size: 1.2rem; }
    footer {
      text-align: center;
      padding: 2rem;
      color: #999;
      font-size: 0.85rem;
    }
    footer a { color: #666; text-decoration: underline; }
    @media (prefers-color-scheme: dark) {
      body { background: #0f0f23; color: #e0e0e0; }
      h1 { color: #e0e0e0; }
      .subtitle { color: #999; }
      .faq-item { background: #1a1a2e; }
      .faq-item h3 { color: #87b0d9; }
      .faq-item p, .faq-item li { color: #ccc; }
      .cta { background: linear-gradient(135deg, #0f0f23, #1a1a2e); }
      .back-link { color: #87b0d9; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="/" class="back-link">&larr; Volver al juego</a>
    <h1>Preguntas Frecuentes (FAQ)</h1>
    <p class="subtitle">Respuestas a las dudas más comunes sobre Palabras Conectadas, el juego diario de conexiones de palabras en español.</p>

    <h2 class="category">Sobre el juego</h2>

    <div class="faq-item">
      <h3>¿Qué es Palabras Conectadas?</h3>
      <p>Palabras Conectadas es un juego diario de conexiones de palabras en español. Cada día recibes 16 palabras que debes organizar en 4 grupos ocultos de 4 palabras cada uno, donde cada grupo comparte un tema o categoría común. El juego incluye palabras señuelo adicionales para aumentar la dificultad.</p>
    </div>

    <div class="faq-item">
      <h3>¿Cada cuándo se publica un puzzle nuevo?</h3>
      <p>Se publica un nuevo puzzle cada día a las 00:00 hora local del jugador. Todos los jugadores alrededor del mundo ven exactamente la misma combinación de palabras cada día, creando una experiencia compartida.</p>
    </div>

    <div class="faq-item">
      <h3>¿Palabras Conectadas es gratuito?</h3>
      <p>Sí, Palabras Conectadas es completamente gratuito y siempre lo será. Todos los puzzles diarios, el archivo histórico completo y todas las funcionalidades del juego están disponibles sin costo alguno.</p>
    </div>

    <div class="faq-item">
      <h3>¿En qué dispositivos puedo jugar?</h3>
      <p>Palabras Conectadas funciona en cualquier navegador web moderno. Puedes jugar en:</p>
      <ul>
        <li>Computadoras (Windows, Mac, Linux) con Chrome, Firefox, Safari, Edge</li>
        <li>Dispositivos móviles iOS y Android con cualquier navegador</li>
        <li>Tabletas</li>
      </ul>
      <p>Además, puedes instalar el juego como una aplicación web progresiva (PWA) en tu teléfono o tableta para acceder directamente desde la pantalla de inicio, sin necesidad de descargar una app de la tienda.</p>
    </div>

    <div class="faq-item">
      <h3>¿Qué modos de juego existen?</h3>
      <p>Hay cuatro modos de juego principales:</p>
      <ul>
        <li><strong>Modo Normal:</strong> 16 palabras + 4 señuelos, 4 errores permitidos. El modo clásico y equilibrado.</li>
        <li><strong>Modo Difícil:</strong> 16 palabras + 8 señuelos, 3 errores permitidos. Para jugadores experimentados.</li>
        <li><strong>Modo Deportes:</strong> 16 palabras sin señuelos, 3 errores permitidos. Un tema deportivo distinto cada día.</li>
        <li><strong>Edición Especial:</strong> puzzles temáticos durante eventos especiales como el Mundial 2026.</li>
      </ul>
    </div>

    <div class="faq-item">
      <h3>¿Qué significan los colores de las categorías?</h3>
      <p>Cada grupo resuelto muestra un color que indica su nivel de dificultad:</p>
      <ul>
        <li><strong>Amarillo:</strong> la categoría más fácil. Generalmente sinónimos evidentes o campos semánticos claros.</li>
        <li><strong>Verde:</strong> dificultad media. Requiere un poco más de reflexión y asociación.</li>
        <li><strong>Azul:</strong> difícil. Conexiones más abstractas o que requieren conocimiento específico.</li>
        <li><strong>Morado:</strong> muy difícil. Juegos de palabras, referencias culturales o conexiones muy creativas.</li>
      </ul>
    </div>

    <h2 class="category">Jugabilidad y reglas</h2>

    <div class="faq-item">
      <h3>¿Cuántos errores puedo cometer?</h3>
      <p>En el modo Normal tienes 4 errores permitidos. En el modo Difícil tienes 3 errores. En el modo Deportes tienes 3 errores. Cuando agotas todos tus errores, el juego termina y se revelan las soluciones de todas las categorías que no hayas resuelto.</p>
    </div>

    <div class="faq-item">
      <h3>¿Qué son las palabras señuelo?</h3>
      <p>Las palabras señuelo son palabras adicionales que aparecen en la pantalla pero NO pertenecen a ninguna categoría del puzzle. Están diseñadas específicamente para confundir y distraer al jugador, aumentando la dificultad del desafío. En el modo Normal hay 4 señuelos, y en el modo Difícil hay 8. El modo Deportes no tiene señuelos: sus 16 palabras pertenecen todas a alguna categoría.</p>
    </div>

    <div class="faq-item">
      <h3>¿Cómo funciona el modo Desafío?</h3>
      <p>El modo Desafío te permite competir con amigos. Después de completar el puzzle del día, haz clic en "Desafiar a un amigo" para generar un enlace único. Comparte ese enlace con tu amigo, y ambos jugarán exactamente el mismo puzzle. Al completarlo, podrán comparar resultados incluyendo tiempo de resolución y número de errores.</p>
    </div>

    <div class="faq-item">
      <h3>¿Se guarda mi progreso si cierro el juego?</h3>
      <p>Sí. Si tienes un puzzle a medio resolver, tu progreso (categorías resueltas, errores cometidos, tiempo transcurrido y palabras seleccionadas) se guarda automáticamente en tu navegador. Puedes cerrar la página, apagar el dispositivo y retomar exactamente donde lo dejaste más tarde.</p>
    </div>

    <div class="faq-item">
      <h3>¿Qué pasa si pierdo todos mis errores?</h3>
      <p>Si agotas todos tus errores, el juego termina. Se revelarán automáticamente todas las categorías que no hayas resuelto, junto con sus palabras. Puedes ver las soluciones completas y compartir tu resultado (aunque no hayas ganado).</p>
    </div>

    <div class="faq-item">
      <h3>¿Puedo jugar puzzles de días anteriores?</h3>
      <p>Sí. Usa el icono de calendario (archivo) en la esquina superior izquierda de la pantalla para acceder al archivo completo de puzzles. Puedes navegar por fechas con el calendario visual y jugar cualquier puzzle desde el lanzamiento del juego.</p>
    </div>

    <h2 class="category">Estadísticas y cuenta</h2>

    <div class="faq-item">
      <h3>¿Cómo funcionan las estadísticas?</h3>
      <p>El juego lleva un registro automático de tus estadísticas, incluyendo:</p>
      <ul>
        <li>Puzzles jugados y completados</li>
        <li>Racha actual y racha máxima de días consecutivos</li>
        <li>Distribución de errores (cuántas veces ganaste con 0, 1, 2, 3 errores)</li>
        <li>Tiempo de resolución de cada puzzle</li>
        <li>Porcentaje de victorias</li>
      </ul>
    </div>

    <div class="faq-item">
      <h3>¿Necesito crear una cuenta para jugar?</h3>
      <p>No. Palabras Conectadas no requiere registro ni creación de cuenta. Puedes jugar inmediatamente al abrir el sitio web. Las estadísticas se almacenan localmente en tu navegador.</p>
    </div>

    <div class="faq-item">
      <h3>¿Cómo funciona la sincronización en la nube?</h3>
      <p>La sincronización en la nube es opcional y te permite mantener tus estadísticas y rachas incluso si borras los datos del navegador o cambias de dispositivo. Utiliza un identificador anónimo generado localmente para proteger tu privacidad. Puedes activarla desde el menú de estadísticas.</p>
    </div>

    <h2 class="category">Compartir y comunidad</h2>

    <div class="faq-item">
      <h3>¿Cómo comparto mi resultado?</h3>
      <p>Después de completar un puzzle, puedes compartir tu resultado de varias formas:</p>
      <ul>
        <li><strong>WhatsApp:</strong> envía tu resultado con el formato visual de colores a tus contactos.</li>
        <li><strong>X (Twitter):</strong> publica tu resultado en tu timeline.</li>
        <li><strong>Copiar al portapapeles:</strong> copia el texto del resultado para compartirlo donde quieras.</li>
        <li><strong>Resultados combinados:</strong> si juegas múltiples modos, puedes compartirlos juntos.</li>
      </ul>
    </div>

    <div class="faq-item">
      <h3>¿Puedo desafiar a mis amigos?</h3>
      <p>Sí. El modo Desafío te permite generar un enlace único para que un amigo juegue exactamente el mismo puzzle que tú completaste. Ambos juegan el mismo desafío y pueden comparar resultados, incluyendo tiempo de resolución y número de errores. Es la forma perfecta de convertir el juego diario en una competencia amistosa.</p>
    </div>

    <h2 class="category">Técnico</h2>

    <div class="faq-item">
      <h3>¿El juego funciona sin conexión a internet?</h3>
      <p>Palabras Conectadas está diseñado como un servicio web y requiere conexión a internet para cargar el juego y los puzzles. Sin embargo, una vez cargado, el juego puede funcionar de forma limitada sin conexión gracias a su service worker (PWA).</p>
    </div>

    <div class="faq-item">
      <h3>¿Cómo puedo contactar al equipo?</h3>
      <p>Puedes contactarnos a través del formulario de contacto en el juego (icono de contacto en el menú, o al final del juego) o por correo electrónico. Todos los mensajes son leídos y respondidos.</p>
    </div>

    <div class="faq-item">
      <h3>¿Cómo se protege mi privacidad?</h3>
      <p>Palabras Conectadas no recopila información personal sin tu consentimiento explícito. Los datos de juego se almacenan localmente en tu navegador. La sincronización en la nube es opcional y utiliza un identificador anónimo. Consulta nuestra <a href="/privacy/">Política de Privacidad</a> para más información.</p>
    </div>

    <div class="faq-item">
      <h3>¿Planean añadir más funcionalidades?</h3>
      <p>Sí, estamos trabajando constantemente en mejorar el juego. Entre las funcionalidades planeadas se incluyen nuevos modos de juego, más integración social y mejoras en la experiencia de usuario basadas en los comentarios de los jugadores.</p>
    </div>

    <div class="cta">
      <h2>¿Tienes más preguntas?</h2>
      <p>El puzzle de hoy te espera. ¿A qué esperas para jugar?</p>
      <a href="/" class="cta-btn">Jugar ahora</a>
    </div>
  </div>

  <footer>
    <p><a href="/">Palabras Conectadas</a> — Juego diario de conexiones de palabras en español</p>
    <p><a href="/tips/">Consejos y trucos</a> | <a href="/blog/">Blog</a> | <a href="/about/">Acerca de</a> | <a href="/como-jugar/">Cómo jugar</a> | <a href="/privacy/">Privacidad</a></p>
  </footer>
</body>
</html>`;

export async function onRequest() {
  return new Response(FAQ_PAGE, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}
