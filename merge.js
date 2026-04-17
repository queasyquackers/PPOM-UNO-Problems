const fs = require('fs');
const window = globalThis || {};
globalThis.window = window;

eval(fs.readFileSync('./Test_Cumulative_Week14.js', 'utf8'));
eval(fs.readFileSync('./batch2.js', 'utf8'));
eval(fs.readFileSync('./batch3.js', 'utf8'));
eval(fs.readFileSync('./batch4.js', 'utf8'));

fs.writeFileSync('./Test_Cumulative_Week14.js', 'window.Test_Cumulative_Week14 = ' + JSON.stringify(window.Test_Cumulative_Week14, null, 2) + ';\n');
console.log("Successfully assembled 40 questions to Test_Cumulative_Week14.js. Total: " + window.Test_Cumulative_Week14.length);
