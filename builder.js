const fs = require('fs');

const files = [
    'Test_L120_1.js',
    'Test_L120_2.js',
    'Test_L120_3.js',
    'Test_L120_4.js',
    'Test_L120_5.js',
    'Test_L120_6.js',
    'Test_L120_7.js'
];

let allQuestions = [];

for (const file of files) {
    const data = fs.readFileSync(file, 'utf8');
    try {
        const arr = JSON.parse(data);
        allQuestions = allQuestions.concat(arr);
    } catch (e) {
        console.error(`Error parsing ${file}:`, e);
    }
}

const finalFileContent = `window.Test_L120 = ${JSON.stringify(allQuestions, null, 2)};`;
fs.writeFileSync('Test_L120.js', finalFileContent);
console.log(`Successfully generated Test_L120.js with ${allQuestions.length} questions.`);
