// Lista de palabras y substrings prohibidas en nombres de usuario
const BLOCKED_WORDS = [
  'carajo', 'coño', 'cojones', 'mierda', 'puta', 'puto', 'puta',
  'pendejo', 'culero', 'chingar', 'chinga', 'verga', 'cabrón',
  'polla', 'gilipollas', 'subnormal', 'maricón', 'maricon',
  'joder', 'jodido', 'hostia', 'hostias',
  'hijueputa', 'hijo de puta',
  'fuck', 'shit', 'asshole', 'bitch', 'bastard', 'cunt', 'dick',
  'motherfucker',
];

const PROFANITY_WORDS = [
  'baboso', 'estúpido', 'idiota', 'imbécil', 'tonto', 'tonta',
  'feo', 'fea', 'gordo', 'gorda', 'largo', 'perdedor',
  'nazi', 'racista',
  'putito', 'putita', 'prostituto', 'prostituta',
];

const SUSPICIOUS_PATTERNS = [
  /\bcarajo\b/i,
  /\bcoño\b/i,
  /\bcojones\b/i,
  /\bmierda\b/i,
  /\bput[ao]\b/i,
  /\bpendejo\b/i,
  /\bculero\b/i,
  /\bverga\b/i,
  /\bcabrón\b/i,
  /\bpolla\b/i,
  /\bgilipollas\b/i,
  /\bmaricón\b/i,
  /\bjoder\b/i,
  /\bjodid[ao]\b/i,
  /\bhostia\b/i,
  /\bfuck\b/i,
  /\bshit\b/i,
  /\basshole\b/i,
  /\bbitch\b/i,
  /\bbastard\b/i,
  /\bcunt\b/i,
  /\bdick\b/i,
];

/**
 * Valida que un nombre de usuario sea apto.
 * @param {string} name
 * @returns {{ valid: boolean, reason?: string }}
 */
export function isValidDisplayName(name) {
  if (!name || typeof name !== 'string') {
    return { valid: false, reason: 'Nombre inválido' };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return { valid: false, reason: 'El nombre debe tener al menos 2 caracteres' };
  }

  if (trimmed.length > 20) {
    return { valid: false, reason: 'El nombre es demasiado largo' };
  }

  const upper = trimmed.toUpperCase();

  const allBlocked = [...BLOCKED_WORDS, ...PROFANITY_WORDS];
  for (const word of allBlocked) {
    if (upper.includes(word.toUpperCase())) {
      return { valid: false, reason: 'Nombre no permitido' };
    }
  }

  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { valid: false, reason: 'Nombre no permitido' };
    }
  }

  return { valid: true };
}