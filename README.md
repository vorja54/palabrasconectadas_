# Palabras Conectadas

Juego diario gratuito tipo NYT Connections en español. Encuentra 4 grupos de 4 palabras que comparten un tema común.

**Sitio web:** https://laconexiondeldia.com

## Stack

- React 19
- Vite 8
- Tailwind CSS 4

## Características

- **Puzzle diario** — Un nuevo desafío cada día con selección determinista basada en la fecha
- **150 puzzles únicos** — Amplia variedad de categorías en español
- **Puzzles especiales** — Puzzles temáticos para fechas concretas (Navidad, Año Nuevo, Halloween, etc.)
- **Estadísticas** — Seguimiento de rachas, partidas jugadas, distribución de intentos
- **Modo oscuro** — Adaptación automática según preferencia del sistema
- **Archivo histórico** — Calendario para jugar puzzles de días anteriores
- **Compartir resultados** — Copia al portapapeles con formato de cuadrícula de colores
- **Timer** — Cronómetro por puzzle con récord personal
- **PWA / Offline** — Instalable como app, funciona sin conexión a internet
  - Service Worker con precarga de todos los assets
  - Caché de Google Fonts
  - Notificación de actualización cuando hay nueva versión
  - Manifest para instalación en home screen
  - theme-color adaptativo (claro/oscuro)

## Scripts

```bash
npm run dev      # Desarrollo con HMR
npm run build    # Build producción
npm run preview  # Vista previa del build
npm run lint     # ESLint
```

## Despliegue

El proyecto se despliega en Cloudflare Pages en el dominio `laconexiondeldia.com`.