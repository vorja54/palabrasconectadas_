const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'connectionsData.js');
let content = fs.readFileSync(dataPath, 'utf-8');

const newPuzzlesRaw = fs.readFileSync('/tmp/jasonInner.txt', 'utf-8').trim();

// Use the unique end of jason-25 as anchor
const simpleTarget = 'SINÓNIMOS DE BELLO';
const idx = content.indexOf(simpleTarget);
if (idx < 0) {
  console.error('ERROR: Could not find target text');
  process.exit(1);
}

// Find end of jason-25: the pattern `}]` then `];`
const afterMarker = content.indexOf('}]', idx);
const afterBracket = content.indexOf('];', afterMarker);

const before = content.substring(0, afterMarker + 2);
const after = content.substring(afterBracket + 2);

const newContent = before + ',\n' + newPuzzlesRaw + '\n];' + after;
fs.writeFileSync(dataPath, newContent, 'utf-8');
console.log('Successfully inserted 125 new jason puzzles');
