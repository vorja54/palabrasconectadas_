// Pool de palabras señuelo.
// Se añaden N palabras extra que no pertenecen a ninguna categoría,
// forzando al jugador a identificar las conexiones reales entre más opciones.
// Expandido para minimizar repeticiones.

const DECOY_WORDS = [
  'AGUA', 'FUEGO', 'TIERRA', 'AIRE', 'LUNA', 'MAR', 'CIELO',
  'RÍO', 'MONTE', 'VALLE', 'LAGO', 'ISLA', 'VOLCÁN', 'DESIERTO', 'BOSQUE',
  'ÁRBOL', 'FLOR', 'HOJA', 'RAMO', 'RAÍZ', 'TRONCO', 'SEMILLA', 'FRUTO',
  'CASA', 'CALLE', 'PLAZA', 'PUENTE', 'TORRE', 'CASTILLO', 'IGLESIA', 'MUSEO',
  'GATO', 'PERRO', 'AVISPA', 'RATÓN', 'LEÓN', 'TIGRE', 'OSO', 'ZORRO',
  'ROJO', 'AZUL', 'VERDE', 'BLANCO', 'NEGRO', 'GRIS', 'ROSA', 'MARRÓN',
  'MESA', 'VASO', 'PLATO', 'CUCHARA', 'SILLA', 'LÁMPARA', 'ESPEJO', 'RELOJ',
  'PAN', 'LECHE', 'HUEVO', 'MIEL', 'ARROZ', 'TRIGO', 'MAÍZ', 'SAL',
  'CUERDA', 'ANILLO', 'PALA', 'PICO', 'MANO', 'DEDO', 'HUESO', 'PIEL',
  'NUBE', 'LLUVIA', 'VIENTO', 'NIEVE', 'TRUENO', 'RAYO', 'ARCO', 'ESTRELLA',
  'DULCE', 'SALADO', 'ÁCIDO', 'AMARGO', 'CALIENTE', 'FRÍO', 'HÚMEDO', 'SECO',
  'DORMIR', 'SOÑAR', 'PENSAR', 'CANTAR', 'BAILAR', 'REÍR', 'LLORAR', 'GRITAR',
  'ALTO', 'BAJO', 'CORTO', 'LARGO', 'RÁPIDO', 'LENTO', 'PESADO', 'LIGERO',
  'SUAVE', 'DURO', 'LISO', 'RUGOSO', 'HONDO', 'LLANO', 'CURVO', 'RECTO',
  'BOLA', 'CAJA', 'RED', 'LLAVE', 'RAMA', 'SOMBRA', 'POLVO', 'BARRO',
  'CABO', 'PUNTA', 'BORDE', 'FILO', 'HUECO', 'NUDO', 'PLEGAR', 'ROMPER',
  'LEER', 'ESCRIBIR', 'DIBUJAR', 'PINTAR', 'TEJER', 'COSER', 'TALLAR', 'FORJAR',
  'NORTE', 'SUR', 'ESTE', 'OESTE', 'CENTRO', 'ALREDEDOR', 'DENTRO', 'FUERA',
  'AÑO', 'HOY', 'AYER', 'TIEMPO', 'NOCHE', 'DÍA', 'SIGLO', 'HORA',
  'ALMA', 'CUERPO', 'MENTE', 'SANGRE', 'SALUD', 'VIDA', 'PAZ', 'FE',
  'META', 'RUTA', 'SENDA', 'CAMINO', 'HUELLA', 'GIRO', 'VUELTA', 'PASO',
  'ACERO', 'BRONCE', 'ALGODÓN', 'LANA', 'PIEDRA', 'BARRO', 'CERA', 'CARTÓN',
  'SUMA', 'VALOR', 'PAR', 'CRUZ', 'PUNTO', 'LINEA', 'TRAZO', 'MARCA',
  'CIMA', 'BASE', 'FONDO', 'CUEVA', 'ORILLA', 'CAUCE', 'PRESA', 'POZO',
  'PRESA', 'TRAMPA', 'SEÑAL', 'RUIDO', 'SILENCIO', 'VOZ', 'ECO', 'RISA',
];

// Seeded pseudo-random number generator (mulberry32)
function seededRandom(seed) {
  let s = seed | 0;
  return function() {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns deterministic decoy words for a given day.
 * @param {number} count - Number of decoys needed
 * @param {string[]} puzzleWords - Words already in the puzzle (to avoid collisions)
 * @param {Date} date - The puzzle date for seeding
 * @returns {string[]}
 */
export function getDecoyWords(count = 4, puzzleWords = [], date = new Date()) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const rng = seededRandom(seed + 999); // Different offset from puzzle seed

  // Filter out words that are already in the puzzle
  const puzzleSet = new Set(puzzleWords.map(w => w.toUpperCase()));
  const available = DECOY_WORDS.filter(w => !puzzleSet.has(w));

  // Fisher-Yates shuffle using seeded RNG
  const shuffled = [...available];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}