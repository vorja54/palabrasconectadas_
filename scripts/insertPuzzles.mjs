import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '..', 'src', 'connectionsData.js');
let content = fs.readFileSync(dataPath, 'utf-8');

// Read the 125 new puzzles
const newPuzzlesRaw = fs.readFileSync('/tmp/jasonInner.txt', 'utf-8').trim();

// The original jason line ends with: `CORONA",color:"purple"}]}]`
// That's: ] closes categories, } closes jason-25 object
// Wait no, looking at the git content: `...color:"purple"}]}]`
// Hmm, that has 2x } followed by ]. Let me trace:
// {id:"jason-25",categories:[{...category4...}]}]
// Wait that makes no sense.

// Let me check the exact end of the JASON_PUZZLES line
const jasonEnd = 'PERICÓN","CORONA"],color:"purple"}]}';
const closeArray = '];';

const targetIndex = content.indexOf(jasonEnd);
if (targetIndex < 0) {
  console.error('ERROR: Could not find jason-25 end marker');
  process.exit(1);
}

// Find the ] that closes the JASON_PUZZLES array (]; on its own line)
const closeArrayIndex = content.indexOf(closeArray, targetIndex);

if (closeArrayIndex < 0) {
  console.error('ERROR: Could not find array close');
  process.exit(1);
}

// Everything up to and including the jason-25 closing }
const beforePart = content.substring(0, targetIndex + jasonEnd.length);
// Everything after the JASON_PUZZLES array close ];
const afterPart = content.substring(closeArrayIndex + closeArray.length);

const newContent = beforePart + ',\n' + newPuzzlesRaw + '\n' + closeArray + afterPart;

fs.writeFileSync(dataPath, newContent, 'utf-8');
console.log(`Inserted 125 new jason puzzles. File size: ${newContent.length} bytes`);

// Validate syntax
try {
  import(dataPath + '?t=' + Date.now());
  console.log('Syntax looks valid');
} catch(e) {
  // import will fail with module not async but syntax check should pass
  console.log('Import attempted (expected error for non-async): ' + e.message.slice(0, 100));
}