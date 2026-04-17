const fs = require('fs');

const lectures = [
    { num: 109, title: "13-OMM: Diagnosis of the Elbow and Wrist" },
    { num: 110, title: "13-Intro to Orthopedics of Upper Extremity" },
    { num: 111, title: "13-Orthopedics: Lower Extremity" },
    { num: 112, title: "13-Orthopedic Concerns of Spine" },
    { num: 113, title: "13-Imaging of the MSK System" },
    { num: 114, title: "13-Intro to MSK Ultrasound" },
    { num: 115, title: "13-Sports Medicine: Overuse Injuries" },
    { num: 116, title: "13-Pediatric Orthopedics" },
    { num: 117, title: "13-Pharm: Pharmacology of NSAIDs" },
    { num: 118, title: "13-Pharm: Pharmacology of NSAIDs Part 2" },
    { num: 119, title: "13-Innate Immunity Part 1" },
    { num: 120, title: "13-Innate Immunity Part 2" },
    { num: 121, title: "13-DPR: History and Physical Exam of the Spine" }
];

const window = {};
global.window = window;
const allQuestions = [];

for (const l of lectures) {
    const code = fs.readFileSync(`Test_L${l.num}.js`, 'utf8');
    try {
        eval(code);
        const testArray = window[`Test_L${l.num}`];
        if (!testArray) {
           console.error(`missing array for ${l.num}`);
           continue; 
        }
        
        // add lectureSource
        for(const q of testArray) {
            q.lectureSource = `Lecture ${l.num}: ${l.title}`;
        }
        
        // shuffle the testArray
        const shuffled = testArray.toSorted(() => Math.random() - 0.5);
        // pick 3
        allQuestions.push(JSON.parse(JSON.stringify(shuffled[0])));
        allQuestions.push(JSON.parse(JSON.stringify(shuffled[1])));
        allQuestions.push(JSON.parse(JSON.stringify(shuffled[2])));
    } catch(e) {
        console.error(`Error in L${l.num}:`, e);
    }
}

// Need 1 more
eval(fs.readFileSync(`Test_L109.js`, 'utf8'));
const extraArr = window[`Test_L109`];
const extraQ = extraArr.find(q => !allQuestions.some(aq => aq.questionText === q.questionText));
extraQ.lectureSource = `Lecture 109: 13-OMM: Diagnosis of the Elbow and Wrist`;
allQuestions.push(JSON.parse(JSON.stringify(extraQ)));

console.log('Total selected:', allQuestions.length);

const targetIndices = [];
for (let i = 0; i < 5; i++) { // 5 options
    for (let j = 0; j < 8; j++) { // 8 times each
        targetIndices.push(i);
    }
}
targetIndices.sort(() => Math.random() - 0.5);
allQuestions.sort(() => Math.random() - 0.5);

for (let i = 0; i < 40; i++) {
    const q = allQuestions[i];
    q.id = i + 1;
    const targetIdx = targetIndices[i];
    
    const correctOption = q.options[q.correctAnswerIndex];
    const otherOptions = q.options.filter((o, idx) => idx !== q.correctAnswerIndex);
    otherOptions.sort(() => Math.random() - 0.5);
    
    otherOptions.splice(targetIdx, 0, correctOption);
    
    q.options = otherOptions;
    q.correctAnswerIndex = targetIdx;
}

const finalCode = `window.Test_Cumulative_Week13 = ${JSON.stringify(allQuestions, null, 2)};`;
fs.writeFileSync('Test_Cumulative_Week13.js', finalCode, 'utf8');
console.log('Successfully wrote Test_Cumulative_Week13.js');
