const fs = require('fs');
const path = require('path');

const testDir = 'c:\\Users\\quazi\\Downloads\\PPOM-UNO-Problems';
const files = fs.readdirSync(testDir).filter(f => f.startsWith('Test_L') && f.endsWith('.js'));

let totalQuestions = 0;
let longestIsCorrectCount = 0;
let fileStats = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(testDir, file), 'utf8');
    // Extract the array content. usually "const Test_L... = [...];"
    const match = content.match(/const\s+\w+\s*=\s*(\[[\s\S]*\])\s*;?/);
    
    if (match) {
        try {
            // Need to handle potential trailing commas or JS-isms that JSON.parse might dislike
            // But from previous outputs, it looked like valid JSON.
            // Let's try to parse. If it fails, we might need a looser parser or eval (with caution).
            // Given the generated nature, it's likely clean JSON.
            const questions = JSON.parse(match[1]);
            
            let fileCorrectCount = 0;
            questions.forEach(q => {
                const options = q.options;
                const correctIndex = q.correctAnswerIndex;
                
                if (options && typeof correctIndex === 'number' && options[correctIndex]) {
                    const lengths = options.map(o => o.text.length);
                    const correctLength = lengths[correctIndex];
                    const maxLength = Math.max(...lengths);
                    
                    // Check if correct is the longest (or tied for longest)
                    if (correctLength === maxLength) {
                        fileCorrectCount++;
                        longestIsCorrectCount++;
                    }
                }
                totalQuestions++;
            });
            
            fileStats.push({
                file: file,
                total: questions.length,
                longestCorrect: fileCorrectCount,
                percent: (fileCorrectCount / questions.length * 100).toFixed(1)
            });
            
        } catch (e) {
            console.error(`Error parsing ${file}: ${e.message}`);
        }
    } else {
        console.error(`Could not extract array from ${file}`);
    }
});

console.log('--- Analysis Results ---');
console.log(`Total Files: ${fileStats.length}`);
console.log(`Total Questions: ${totalQuestions}`);
console.log(`Longest Answer is Correct: ${longestIsCorrectCount} times`);
console.log(`Overall Percentage: ${(longestIsCorrectCount / totalQuestions * 100).toFixed(2)}%`);

console.log('\n--- Per File Statistics ---');
// Sort by highest percentage
fileStats.sort((a, b) => b.longestCorrect / b.total - a.longestCorrect / a.total);
fileStats.forEach(stat => {
    console.log(`${stat.file}: ${stat.percent}% (${stat.longestCorrect}/${stat.total})`);
});
