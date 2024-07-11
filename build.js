const fs = require('fs');
const path = require('path');
const b = require('./vendors/babel.min.js');
// console.log(b.availablePresets);

const sourceName = process.argv[2] || 'app.jsx';
const targetName = path.basename(sourceName, '.jsx') + '.compiled.js';
console.log(`Compiling ${sourceName} to ${targetName}...`);
const source = fs.readFileSync(sourceName);
const target = b.transform(source, {presets:['react', 'es2017']});
fs.writeFileSync(targetName, target.code);
