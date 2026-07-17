// Spanish syllabic hyphenation per RAE rules
// Inserts soft hyphens (\u00AD) at syllable boundaries for words > 8 chars.


// Indivisible consonant groups: consonant + l/r, ch, ll, rr
const IS_INDIVISIBLE = new Set([
  'pr','pl','br','bl','tr','tl','dr','dl','cr','cl','gr','gl','fr','fl','kr','kl',
  'ch','ll','rr',
]);

function isVowel(ch) { return /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/.test(ch); }
function isStrong(ch) { return /[aeoáéóAEOÁÉÓ]/.test(ch); }
function isWeak(ch) { return /[iuíúüIUÍÚÜ]/.test(ch); }

export function addSoftHyphens(word) {
  if (!word || word.length <= 8) return word;

  const chars = [...word];
  const syllables = [];
  let start = 0;

  for (let i = 1; i < chars.length; i++) {
    if (start === i) continue;

    // Check for syllable boundary at position i
    const prev = chars[i - 1];
    const curr = chars[i];
    const next = chars[i + 1] || '';
    const prev2 = chars[i - 2] || '';

    // Case 1: Vowel hiatus (strong+strong or weak+strong)
    if (isVowel(prev) && isVowel(curr)) {
      if ((isStrong(prev) && isStrong(curr)) || (isWeak(prev) && isStrong(curr))) {
        syllables.push(chars.slice(start, i).join(''));
        start = i;
        continue;
      }
    }

    // Case 2: VCCV — two consonants between vowels
    if (isVowel(prev2) && !isVowel(prev) && !isVowel(curr) && isVowel(next) && i >= 2) {
      const pair = (prev + curr).toLowerCase();
      if (!IS_INDIVISIBLE.has(pair)) {
        syllables.push(chars.slice(start, i).join(''));
        start = i;
        continue;
      } else {
        // Indivisible pair — break before the pair
        syllables.push(chars.slice(start, i - 1).join(''));
        start = i - 1;
        continue;
      }
    }

    // Case 3: VCV — single consonant between vowels (goes with next vowel)
    if (isVowel(prev2) && !isVowel(prev) && isVowel(curr) && i >= 2 && start < i - 1) {
      // Don't break if we'd leave just one char
      if (i - start > 1) {
        syllables.push(chars.slice(start, i - 1).join(''));
        start = i - 1;
        continue;
      }
    }

    // Case 4: Three consonants — split after the first
    if (i >= 2 && !isVowel(prev) && !isVowel(curr) && !isVowel(next) && i + 1 < chars.length) {
      const next2 = chars[i + 2] || '';
      if (!isVowel(next) && isVowel(next2)) {
        syllables.push(chars.slice(start, i).join(''));
        start = i;
        continue;
      }
    }
  }

  // Push remaining chars
  if (start < chars.length) {
    syllables.push(chars.slice(start).join(''));
  }

  // Merge any single-character syllables with neighbors (RAE: no orphan vowels)
  if (syllables.length > 1) {
    for (let i = syllables.length - 1; i >= 0; i--) {
      if (syllables[i].length === 1 && isVowel(syllables[i]) && syllables.length > 1) {
        if (i > 0 && i < syllables.length - 1) {
          // Merge with previous syllable
          syllables[i - 1] += syllables[i];
          syllables.splice(i, 1);
        } else if (i === 0 && syllables.length > 1) {
          syllables[1] = syllables[0] + syllables[1];
          syllables.splice(0, 1);
        }
      }
    }
  }

  // Don't split if we'd get too many tiny pieces (looks bad)
  // For very long words, ensure no syllable is longer than ~6 chars
  // by doing a secondary pass
  if (syllables.length === 1 && word.length > 10) {
    // Fallback: simple split at consonant boundaries
    return simpleHyphenate(word);
  }

  return syllables.join('\u00AD');
}

// Fallback for words where syllabification didn't split
function simpleHyphenate(word) {
  const result = [];
  let i = 0;
  while (i < word.length) {
    // Try to break after a consonant followed by a vowel
    let breakAt = i + Math.min(4, word.length - i);

    for (let j = i + 2; j < word.length - 1; j++) {
      if (!isVowel(word[j - 1]) && isVowel(word[j])) {
        breakAt = j - 1;
        if (breakAt - i >= 3) break;
      }
    }

    result.push(word.slice(i, breakAt));
    i = breakAt;
  }
  return result.join('\u00AD');
}