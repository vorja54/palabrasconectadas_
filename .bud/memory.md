# Project memory

## Cloudflare
- Account ID: c4e4e046b598f26c268fa40733a16bd4
- Pages project: laconexiondeldia
- KV namespace: STATS (id: c123450a7b9f4342afa0ab6274104e51)
- Deploy: `npx wrangler pages deploy dist --project-name laconexiondeldia` (con CLOUDFLARE_API_TOKEN)
- ⚠️ El token local se revocó. NO guardar tokens en el repo.

## Puzzle Inventory (`src/connectionsData.js`)

| Pool | Count | IDs |
|------|-------|-----|
| PUZZLES (normal) | 150 | puzzle-1 a puzzle-150 |
| JASON_PUZZLES (hard/difícil) | 150 | jason-1 a jason-150 |
| MUNDIAL_PUZZLES | 25 | mundial-1 a mundial-25 |
| SPECIAL_PUZZLES | 9 | fechas especiales (MMDD): 0101, 0214, 0317, 0505, 0715, 0916, 1012, 1119, 1225 |
| **Total** | **334** | |

### Puzzle selection logic
- `getDailyPuzzle(date, 'normal')` → PUZZLES (seed = YYYYMMDD)
- `getDailyPuzzle(date, 'jason')` → JASON_PUZZLES (seed = YYYYMMDD + 99999)
- `getDailyPuzzle(date, 'special')` → MUNDIAL_PUZZLES (durante fechas del Mundial)
- SPECIAL_PUZZLES se usan en modo normal si la fecha coincide (MMDD)

### Word-level constraint
- Cada puzzle: 4 categorias × 4 palabras = 16 palabras unicas
- Ninguna palabra puede repetirse entre categorias del mismo puzzle
- Los puzzles normal (PUZZLES) y difícil (JASON_PUZZLES) son completamente independientes entre sí (diferentes categorías y palabras)