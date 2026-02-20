const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const version = Date.now();
html = html.replace(/<script src="Test_(.*?)\.js"><\/script>/g, `<script src="Test_$1.js?v=${version}"></script>`);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html with cache busters.');
