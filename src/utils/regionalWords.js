// Mapa de palabras con variantes regionales.
// Clave: región ISO, Valor: { PALABRA_ORIGINAL: 'PALABRA_LOCAL' }

const REGIONAL_MAP = {
  'es-ES': {
    JUGO: 'ZUMO',
    COMPUTADORA: 'ORDENADOR',
    MANÍ: 'CACAHUETE',
    AGUACATE: 'PALTA',
    ELOTE: 'MAÍZ',
    FRIJOLES: 'ALUBIAS',
    POPOTE: 'PAJITA',
    BANANA: 'PLÁTANO',
    CAMISETA: 'CAMISETA',
    COMPUTADOR: 'ORDENADOR',
  },
};

const REGIONS = [
  { code: 'es-ES', label: 'España' },
];

function detectRegionFromLang(lang) {
  if (lang.startsWith('es')) return 'es-ES';
  return 'default';
}

/**
 * Detecta la región del usuario según el navegador.
 * @returns {string} código de región ISO
 */
export function getCurrentRegion() {
  if (typeof navigator === 'undefined') return 'default';
  const lang = navigator.language || navigator.userLanguage || '';
  return detectRegionFromLang(lang);
}

/**
 * Traduce una palabra a la variante regional si existe.
 * Si no hay variante, devuelve la palabra original.
 * @param {string} word - palabra en mayúsculas
 * @param {string} region - código de región ISO
 * @returns {string}
 */
export function localizeWord(word, region) {
  if (!region || region === 'default') return word;
  const map = REGIONAL_MAP[region];
  if (!map) return word;
  return map[word] || word;
}