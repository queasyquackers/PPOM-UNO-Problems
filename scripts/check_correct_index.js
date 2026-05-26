// Audit script: verify correctAnswerIndex matches the option whose explanation begins with "Correct."
// Run: node scripts/check_correct_index.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

const BLOCK4_FILES = [
  // Week 17
  'Test_L149.js','Test_L150.js','Test_L151.js','Test_L151_Part2.js','Test_L152.js','Test_L152_Part2.js',
  'Test_L153.js','Test_L154.js','Test_L154_Part2.js','Test_L155.js','Test_L155_Part2.js',
  'Test_L156.js','Test_L157.js','Test_L158.js','Test_L159.js','Test_Cumulative_Week17.js',
  // Week 18
  'Test_L161.js','Test_L162.js','Test_L163.js','Test_L164.js','Test_L165.js','Test_L166.js','Test_L166_Part2.js',
  'Test_L167.js','Test_L168.js','Test_L169.js','Test_L170.js','Test_Cumulative_Week18.js',
  // Week 19
  'Test_L172.js','Test_L173.js','Test_L174.js','Test_L175.js','Test_L176.js','Test_L177.js',
  'Test_L178.js','Test_L179.js','Test_L180.js','Test_L181.js','Test_L182.js','Test_Cumulative_Week19.js',
  // Week 20
  'Test_L184.js','Test_L185.js','Test_L186.js','Test_L187.js','Test_L188.js','Test_L189.js',
  'Test_L190.js','Test_L191.js','Test_L192.js',
  // Pathoma (Section IV supplemental)
  'Test_Pathoma_6_2.js','Test_Pathoma_6_3.js','Test_Pathoma_6_4.js','Test_Pathoma_6_5_7.js',
];

const sandbox = { window: {} };
vm.createContext(sandbox);

let totalQuestions = 0;
let mismatches = [];
let missingFiles = [];
let noCorrectMarker = [];
let multipleCorrectMarkers = [];

for (const fname of BLOCK4_FILES) {
  const fp = path.join(ROOT, fname);
  if (!fs.existsSync(fp)) { missingFiles.push(fname); continue; }
  const code = fs.readFileSync(fp, 'utf8');
  try {
    vm.runInContext(code, sandbox);
  } catch (e) {
    console.error(`Parse error in ${fname}: ${e.message}`);
    continue;
  }
}

for (const [key, arr] of Object.entries(sandbox.window)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    if (!q || !Array.isArray(q.options) || typeof q.correctAnswerIndex !== 'number') continue;
    totalQuestions++;
    const correctMarkers = q.options
      .map((o, i) => /^\s*Correct[\.\:]/i.test(o.explanation || '') ? i : -1)
      .filter(i => i >= 0);
    if (correctMarkers.length === 0) {
      noCorrectMarker.push({ key, id: q.id, declared: q.correctAnswerIndex });
      continue;
    }
    if (correctMarkers.length > 1) {
      multipleCorrectMarkers.push({ key, id: q.id, markers: correctMarkers, declared: q.correctAnswerIndex });
    }
    if (!correctMarkers.includes(q.correctAnswerIndex)) {
      mismatches.push({
        key,
        id: q.id,
        declared: q.correctAnswerIndex,
        rationaleMarks: correctMarkers,
        declaredText: (q.options[q.correctAnswerIndex] || {}).text || '',
        rationaleText: (q.options[correctMarkers[0]] || {}).text || '',
      });
    }
  }
}

console.log(`Scanned ${totalQuestions} questions across ${BLOCK4_FILES.length - missingFiles.length} files`);
if (missingFiles.length) console.log(`Missing files: ${missingFiles.join(', ')}`);
console.log('');
console.log(`MISMATCHES (declared index != "Correct." rationale index): ${mismatches.length}`);
for (const m of mismatches) {
  console.log(`  ${m.key} q#${m.id}: declared=${m.declared} ("${m.declaredText.slice(0,80)}"), rationale=${m.rationaleMarks.join(',')} ("${m.rationaleText.slice(0,80)}")`);
}
console.log('');
console.log(`Questions with NO "Correct." marker in any option: ${noCorrectMarker.length}`);
for (const m of noCorrectMarker.slice(0, 20)) {
  console.log(`  ${m.key} q#${m.id} (declared=${m.declared})`);
}
console.log('');
console.log(`Questions with MULTIPLE "Correct." markers: ${multipleCorrectMarkers.length}`);
for (const m of multipleCorrectMarkers) {
  console.log(`  ${m.key} q#${m.id}: markers=${m.markers.join(',')} declared=${m.declared}`);
}
