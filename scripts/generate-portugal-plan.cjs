const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak, ExternalHyperlink
} = require('docx');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, bold: true, size: 32, font: "Arial" })], spacing: { before: 360, after: 200 } });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, bold: true, size: 26, font: "Arial" })], spacing: { before: 240, after: 160 } });
}

function heading3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text, bold: true, size: 24, font: "Arial" })], spacing: { before: 200, after: 120 } });
}

function para(text, opts = {}) {
  const runs = [];
  if (typeof text === 'string') {
    runs.push(new TextRun({ text, font: "Arial", size: 22, ...opts }));
  } else {
    text.forEach(t => runs.push(new TextRun({ font: "Arial", size: 22, ...t })));
  }
  return new Paragraph({ children: runs, spacing: { after: 120 } });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, font: "Arial", size: 22 })],
    spacing: { after: 60 }
  });
}

function spacer() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "1A1A2E", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, bold: true, font: "Arial", size: 20, color: "FFFFFF" })] })]
  });
}

function cell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 20 })] })]
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1A1A2E" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "0F3460" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "333333" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
    }, {
      reference: "numbers",
      levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
    }]
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({ children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "Palabras Conectadas — Plan de expansión", font: "Arial", size: 18, color: "999999", italics: true })]
        })] })
      },
      footers: {
        default: new Footer({ children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Página ", font: "Arial", size: 18, color: "999999" }), new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "999999" })]
        })] })
      },
      children: [
        // ===== TITLE PAGE =====
        new Paragraph({ spacing: { before: 2400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Palabras Conectadas", font: "Arial", size: 52, bold: true, color: "1A1A2E" })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "Plan de expansi\u00F3n a portugu\u00E9s", font: "Arial", size: 36, color: "0F3460" })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [new TextRun({ text: "Opci\u00F3n A \u2014 Subdominio independiente", font: "Arial", size: 28, color: "666666" })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "pt.laconexiondeldia.com", font: "Arial", size: 24, color: "E94560", bold: true })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Junio 2026", font: "Arial", size: 22, color: "999999" })]
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== TABLE OF CONTENTS =====
        heading1("Índice"),
        para([{ text: "1. Resumen ejecutivo", bold: true }]),
        para([{ text: "2. Arquitectura del proyecto", bold: true }]),
        para([{ text: "3. Traducción de la interfaz (UI)", bold: true }]),
        para([{ text: "4. Datos del juego (puzzles)", bold: true }]),
        para([{ text: "5. Infraestructura en Cloudflare", bold: true }]),
        para([{ text: "6. Email y contacto", bold: true }]),
        para([{ text: "7. SEO y metadata", bold: true }]),
        para([{ text: "8. Testing y QA", bold: true }]),
        para([{ text: "9. Estimación de esfuerzo", bold: true }]),
        para([{ text: "10. Checklist de lanzamiento", bold: true }]),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 1. RESUMEN EJECUTIVO =====
        heading1("1. Resumen ejecutivo"),
        para("Duplicar Palabras Conectadas al portugués usando un subdominio independiente (pt.laconexiondeldia.com) es la opción más limpia y escalable. Cada idioma es un proyecto separado en Cloudflare Pages, sin acoplamiento entre ellos. Esto permite:"),
        bullet("Puzzles independientes para cada idioma"),
        bullet("Despliegues separados sin riesgo de romper el otro idioma"),
        bullet("SEO optimizado por separado (cada subdominio indexa de forma independiente)"),
        bullet("Estadísticas y leaderboard segregados por idioma"),
        bullet("Mantenimiento sencillo: se puede trabajar en uno sin afectar al otro"),

        spacer(),
        para("El coste adicional es mínimo: Cloudflare Pages permite proyectos ilimitados en el plan gratuito, y el dominio laconexiondeldia.com ya incluye subdominios sin coste adicional."),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 2. ARQUITECTURA =====
        heading1("2. Arquitectura del proyecto"),
        para("La estructura recomendada es duplicar el repositorio completo y crear un nuevo proyecto en Cloudflare Pages. Los proyectos compartirán el código base de React/Vite, pero cada uno tendrá su propio:"),
        bullet("Repositorio o rama separada"),
        bullet("Proyecto en Cloudflare Pages"),
        bullet("Conjunto de puzzles en portugués"),
        bullet("Archivos de traducción"),
        bullet("Base de datos KV para estadísticas"),

        spacer(),
        heading2("2.1 Estructura de repositorios"),
        para("Opción A1: Repositorio separado"),
        bullet("palabras-conectadas-es (español)"),
        bullet("palabras-conectadas-pt (portugués)"),
        para("Opción A2: Mismo repositorio, ramas separadas", { bold: true }),
        bullet("Rama main → español"),
        bullet("Rama portuguese → portugués"),

        spacer(),
        heading2("2.2 Estructura de carpetas (opción A2)"),
        para("Para maximizar el código compartido, se puede usar un solo repo con carpetas de idioma:"),

        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3120, 3120, 3120],
          rows: [
            new TableRow({ children: [headerCell("Carpeta", 3120), headerCell("ES (español)", 3120), headerCell("PT (portugués)", 3120)] }),
            new TableRow({ children: [cell("src/components/", 3120), cell("Compartido (UI)", 3120), cell("Mismos componentes, textos traducidos vía props/context", 3120)] }),
            new TableRow({ children: [cell("src/connectionsData.js", 3120), cell("Puzzles ES", 3120), cell("Crear connectionsData-pt.js", 3120)] }),
            new TableRow({ children: [cell("src/decoyWords.js", 3120), cell("Señuelos ES", 3120), cell("Traducir señuelos", 3120)] }),
            new TableRow({ children: [cell("src/regionalWords.js", 3120), cell("Regional ES", 3120), cell("Crear versión PT", 3120)] }),
            new TableRow({ children: [cell("functions/tips.js", 3120), cell("Tips ES", 3120), cell("Tips PT separados", 3120)] }),
            new TableRow({ children: [cell("public/privacy/", 3120), cell("Privacidad ES", 3120), cell("Privacidad PT", 3120)] }),
            new TableRow({ children: [cell("wrangler.toml", 3120), cell("Config ES", 3120), cell("Config PT (otro KV)", 3120)] }),
          ]
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 3. TRADUCCIÓN UI =====
        heading1("3. Traducción de la interfaz (UI)"),
        para("Cada componente con textos visibles necesita una versión en portugués. A continuación, el mapeo de traducciones:"),

        spacer(),
        heading2("3.1 Componentes a traducir"),

        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3120, 3120, 3120],
          rows: [
            new TableRow({ children: [headerCell("Componente", 3120), headerCell("Textos clave (ES)", 3120), headerCell("Traducción (PT)", 3120)] }),
            new TableRow({ children: [cell("ConnectionsGame.jsx", 3120), cell("Jugar, Mezclar, Enviar, Vidas, Normal, Difícil, Ya has jugado hoy, Modo Práctica, Tips y Consejos, Contacto, Privacidad", 3120), cell("Jogar, Embaralhar, Enviar, Vidas, Normal, Difícil, Você já jogou hoje, Modo Prática, Dicas e Conselhos, Contato, Privacidade", 3120)] }),
            new TableRow({ children: [cell("index.html", 3120), cell("Palabras Conectadas — Juego diario...", 3120), cell("Palavras Conectadas — Jogo diário...", 3120)] }),
            new TableRow({ children: [cell("HowToPlay.jsx", 3120), cell("Cómo jugar, Encuentra las conexiones, 16 palabras, 4 señuelos, 3 errores", 3120), cell("Como jogar, Encontre as conexões, 16 palavras, 4 distrações, 3 erros", 3120)] }),
            new TableRow({ children: [cell("StatsModal.jsx", 3120), cell("Estadísticas, Jugadas, Victorias, Racha, Mejor, Tiempo, Compartir", 3120), cell("Estatísticas, Jogadas, Vitórias, Sequência, Melhor, Tempo, Compartilhar", 3120)] }),
            new TableRow({ children: [cell("LeaderboardModal.jsx", 3120), cell("Leaderboard, Mejor tiempo, Mejor racha, Más victorias, Normal, Difícil", 3120), cell("Leaderboard, Melhor tempo, Melhor sequência, Mais vitórias, Normal, Difícil", 3120)] }),
            new TableRow({ children: [cell("ArchiveModal.jsx", 3120), cell("Archivo, Explorar puzzles anteriores", 3120), cell("Arquivo, Explorar puzzles anteriores", 3120)] }),
            new TableRow({ children: [cell("ChallengeModal.jsx", 3120), cell("Desafiar a un amigo, Código de desafío", 3120), cell("Desafiar um amigo, Código do desafio", 3120)] }),
            new TableRow({ children: [cell("ContactModal.jsx", 3120), cell("Contacto, Nombre, Email, Asunto, Mensaje, Enviar", 3120), cell("Contato, Nome, Email, Assunto, Mensagem, Enviar", 3120)] }),
            new TableRow({ children: [cell("PushSubscribe.jsx", 3120), cell("Activar notificaciones", 3120), cell("Ativar notificações", 3120)] }),
            new TableRow({ children: [cell("UpdateBanner.jsx", 3120), cell("Nueva versión disponible, Actualizar", 3120), cell("Nova versão disponível, Atualizar", 3120)] }),
          ]
        }),

        spacer(),
        heading2("3.2 Archivos de texto adicionales"),
        bullet("functions/tips.js → crear functions/tips-pt.js o parametrizar"),
        bullet("public/privacy/index.html → crear public/privacy-pt/index.html"),
        bullet("public/sitemap.xml → actualizar con URLs PT"),
        bullet("sw-custom.js → textos de notificaciones push"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 4. DATOS DEL JUEGO =====
        heading1("4. Datos del juego (puzzles)"),
        para("Esta es la parte que más trabajo requiere. Los puzzles deben ser creados desde cero en portugués, no traducidos literalmente del español, porque los juegos de palabras y conexiones no siempre funcionan en otro idioma."),

        spacer(),
        heading2("4.1 Puzzles modo Normal"),
        bullet("100+ puzzles diarios en portugués"),
        bullet("Cada puzzle: 4 categorías × 4 palabras + 4 señuelos"),
        bullet("Las categorías deben tener sentido cultural para Brasil/Portugal"),
        bullet("Ejemplos de temas: frutas (maçã, banana, uva, laranja), animales (cachorro, gato, peixe, pássaro), colores, etc."),

        spacer(),
        heading2("4.2 Puzzles modo Difícil"),
        bullet("25+ puzzles con 8 señuelos en vez de 4"),
        bullet("Conexiones más abstractas y tramposas"),
        bullet("Requiere pensar en portugués (no traducir literamente)"),

        spacer(),
        heading2("4.3 Archivos a crear/modificar"),
        bullet("src/connectionsData-pt.js (o parametrizar el existente)"),
        bullet("src/utils/decoyWords-pt.js — palabras señuelo en portugués"),
        bullet("src/utils/regionalWords-pt.js — adaptaciones regionales"),
        bullet("src/utils/profanityFilter-pt.js — filtro de groserías en portugués"),
        bullet("src/utils/hyphenate.js — sí funciona igual, revisar acentos"),

        spacer(),
        heading2("4.4 Consideraciones lingüísticas"),
        bullet("Brasil vs Portugal: decidir si usar portugués brasileño (recomendado, mayor audiencia) o un mix neutro"),
        bullet("Acentos y caracteres: ç, ã, õ, ê (Vite/React lo manejan bien con UTF-8)"),
        bullet("Juegos de palabras: muchos no son traducibles, hay que crear nuevos desde cero"),
        bullet("Categorías culturales: referencias a la cultura brasileña/portuguesa"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 5. INFRAESTRUCTURA =====
        heading1("5. Infraestructura en Cloudflare"),
        para("Configuración necesaria en Cloudflare para el nuevo subdominio:"),

        spacer(),
        heading2("5.1 Cloudflare Pages"),
        bullet("Crear nuevo proyecto: Conexões do Dia (pt)"),
        bullet("Nombre del proyecto: conexoes-do-dia"),
        bullet("Subdominio: pt.laconexiondeldia.com"),
        bullet("Configurar build: npm run build, directorio dist"),
        bullet("Conectar con Git (nuevo repo o rama)"),

        spacer(),
        heading2("5.2 DNS"),
        bullet("Añadir registro CNAME: pt → laconexiondeldia.pages.dev"),
        bullet("O registrar dominio .com.br si se quiere algo como conexoesdodia.com.br"),

        spacer(),
        heading2("5.3 KV Namespace"),
        bullet("Crear nuevo KV namespace para estadísticas PT"),
        bullet("Actualizar wrangler.toml con el nuevo binding STATS y su ID"),
        bullet("Ventaja: los datos de usuarios PT están completamente separados de ES"),

        spacer(),
        heading2("5.4 Variables de entorno"),
        bullet("RESEND_API_KEY (la misma o nueva para el dominio PT)"),
        bullet("Posiblemente misma key si se usa el mismo dominio"),

        spacer(),
        heading2("5.5 Service Worker (PWA)"),
        bullet("El mismo sw-custom.js sirve (no tiene textos visibles)"),
        bullet("Actualizar manifest.webmanifest con nombre en portugués"),
        bullet("Cambiar nombre de la app en index.html: 'Conexões do Dia'"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 6. EMAIL =====
        heading1("6. Email y contacto"),
        para("Configuración para el formulario de contacto en portugués:"),

        spacer(),
        heading2("6.1 Email Routing"),
        bullet("Subdominio pt.laconexiondeldia.com no hereda el Email Routing de laconexiondeldia.com"),
        bullet("Opción A: usar ola@laconexiondeldia.com como contacto general (ya configurado)"),
        bullet("Opción B: configurar ola@conexoesdodia.com.br si se compra dominio .com.br"),

        spacer(),
        heading2("6.2 Resend"),
        bullet("Verificar dominio pt.laconexiondeldia.com en Resend (o usar el mismo from contacto@laconexiondeldia.com)"),
        bullet("La API key configurada ya funciona para cualquier remitente verificado"),

        spacer(),
        heading2("6.3 Traducción del email de contacto"),
        bullet("El HTML del email en contact.js se envía en español"),
        bullet("Para PT: traducir el template del email (título 'Nuevo mensaje de contacto' → 'Nova mensagem de contato')"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 7. SEO =====
        heading1("7. SEO y metadata"),
        para("Cada subdominio debe tener su propia optimización SEO:"),

        spacer(),
        heading2("7.1 Meta tags en index.html"),
        bullet("title: 'Conexões do Dia — Jogo diário de conexões de palavras em português'"),
        bullet("description: traducción al portugués"),
        bullet("keywords: palavras conectadas, jogo de palavras, conexões diárias"),
        bullet("canonical: https://pt.laconexiondeldia.com"),
        bullet("Open Graph: todo traducido"),

        spacer(),
        heading2("7.2 Sitemap y robots"),
        bullet("public/sitemap.xml → URLs con pt.laconexiondeldia.com"),
        bullet("public/robots.txt → ok, mismo contenido"),

        spacer(),
        heading2("7.3 Schema.org"),
        bullet("Actualizar name a 'Conexões do Dia'"),
        bullet("url apuntando al subdominio PT"),

        spacer(),
        heading2("7.4 Google Analytics"),
        bullet("Usar el mismo ID (G-3MTG2PS1HE) o crear uno nuevo separado"),
        bullet("Recomendado: mismo ID para ver tráfico consolidado, o separado para métricas por idioma"),
        bullet("Google Search Console: añadir el subdominio como nueva propiedad"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 8. TESTING =====
        heading1("8. Testing y QA"),

        spacer(),
        heading2("8.1 Tests existentes"),
        bullet("Los 168 tests actuales deben seguir pasando en ES"),
        bullet("Duplicar tests para PT con datos en portugués"),
        bullet("Testear específicamente la selección de puzzles por fecha en PT"),

        spacer(),
        heading2("8.2 Nuevos tests"),
        bullet("Test de traducciones: verificar que todos los textos visibles están traducidos"),
        bullet("Test de puzzles PT: que no se mezclan con puzzles ES"),
        bullet("Test de señuelos PT: que las palabras señuelo están en portugués"),
        bullet("Test de filtro de groserías PT"),

        spacer(),
        heading2("8.3 QA manual"),
        bullet("Recorrer toda la UI en portugués"),
        bullet("Jugar puzzles completos en modo Normal y Difícil"),
        bullet("Probar leaderboard, estadísticas, archivo, desafíos"),
        bullet("Probar formulario de contacto"),
        bullet("Probar en móvil y desktop"),
        bullet("Probar modo oscuro"),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 9. ESTIMACIÓN =====
        heading1("9. Estimación de esfuerzo"),

        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [4680, 2340, 2340],
          rows: [
            new TableRow({ children: [headerCell("Área", 4680), headerCell("Tiempo estimado", 2340), headerCell("Dificultad", 2340)] }),
            new TableRow({ children: [cell("Crear proyecto Cloudflare + DNS", 4680), cell("30 min", 2340), cell("Baja", 2340)] }),
            new TableRow({ children: [cell("Traducir UI (componentes)", 4680), cell("4-6 horas", 2340), cell("Media", 2340)] }),
            new TableRow({ children: [cell("Crear puzzles modo Normal (100+)", 4680), cell("15-20 horas", 2340), cell("Alta", 2340)] }),
            new TableRow({ children: [cell("Crear puzzles modo Difícil (25+)", 4680), cell("6-8 horas", 2340), cell("Alta", 2340)] }),
            new TableRow({ children: [cell("Señuelos, filtros, regionales", 4680), cell("2-3 horas", 2340), cell("Media", 2340)] }),
            new TableRow({ children: [cell("SEO + metadata", 4680), cell("1-2 horas", 2340), cell("Baja", 2340)] }),
            new TableRow({ children: [cell("Tips y página de privacidad", 4680), cell("2-3 horas", 2340), cell("Media", 2340)] }),
            new TableRow({ children: [cell("Testing (tests + QA manual)", 4680), cell("4-6 horas", 2340), cell("Media", 2340)] }),
            new TableRow({ children: [cell("Ajustes finales y lanzamiento", 4680), cell("1-2 horas", 2340), cell("Baja", 2340)] }),
            new TableRow({ children: [cell({ text: "TOTAL", bold: true }, 4680), cell({ text: "35-50 horas", bold: true }, 2340), cell({ text: "", bold: true }, 2340)] }),
          ]
        }),

        spacer(),
        para("La mayor parte del tiempo (15-20h) se va en crear los puzzles en portugués. Si ya tienes las listas de palabras y categorías, ese tiempo se reduce drásticamente."),

        new Paragraph({ children: [new PageBreak()] }),

        // ===== 10. CHECKLIST =====
        heading1("10. Checklist de lanzamiento"),

        heading2("10.1 Preparación"),
        bullet("[ ] Crear repositorio o rama para portugués"),
        bullet("[ ] Crear proyecto en Cloudflare Pages (conexoes-do-dia)"),
        bullet("[ ] Configurar DNS: CNAME pt → laconexiondeldia.pages.dev"),
        bullet("[ ] Crear KV namespace para estadísticas PT"),
        bullet("[ ] Configurar variable RESEND_API_KEY en Cloudflare"),

        spacer(),
        heading2("10.2 Contenido"),
        bullet("[ ] Traducir todos los componentes de UI al portugués"),
        bullet("[ ] Crear 100+ puzzles modo Normal"),
        bullet("[ ] Crear 25+ puzzles modo Difícil"),
        bullet("[ ] Traducir palabras señuelo"),
        bullet("[ ] Crear filtro de groserías en portugués"),
        bullet("[ ] Traducir página de Tips"),
        bullet("[ ] Traducir página de Privacidad"),
        bullet("[ ] Actualizar index.html (title, meta, Open Graph)"),
        bullet("[ ] Actualizar sitemap.xml"),
        bullet("[ ] Actualizar manifest.webmanifest"),

        spacer(),
        heading2("10.3 Funcionalidad"),
        bullet("[ ] Verificar que los puzzles PT se cargan correctamente"),
        bullet("[ ] Verificar leaderboard y estadísticas (KV separado)"),
        bullet("[ ] Verificar que el archivo histórico funciona"),
        bullet("[ ] Verificar modo desafío entre usuarios PT"),
        bullet("[ ] Verificar formulario de contacto"),
        bullet("[ ] Verificar notificaciones push"),
        bullet("[ ] Verificar modo oscuro"),

        spacer(),
        heading2("10.4 Lanzamiento"),
        bullet("[ ] Tests: 168+ tests pasando"),
        bullet("[ ] Build: npm run build sin errores"),
        bullet("[ ] Desplegar en Cloudflare Pages"),
        bullet("[ ] Verificar Google Analytics funciona"),
        bullet("[ ] Añadir subdominio a Google Search Console"),
        bullet("[ ] Configurar Email Routing si es necesario"),
        bullet("[ ] Anunciar lanzamiento"),

        spacer(),
        spacer(),
        // ===== FINAL =====
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 600 },
          children: [new TextRun({ text: "— Fin del documento —", font: "Arial", size: 22, color: "999999", italics: true })]
        }),
      ]
    }
  ]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/user/computer/juego/Plan_Expansion_Portugues.docx", buffer);
  console.log("Documento creado: Plan_Expansion_Portugues.docx");
});