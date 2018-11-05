const fs = require('fs');
const handlebars = require('handlebars');

const inFile = './index.hbs';
const outFile = './index.html';

const data = require('./data.json');

const source = fs.readFileSync(inFile, 'utf8');
const template = handlebars.compile(source, { strict: true });
const result = template(data);

fs.writeFileSync(outFile, result);
console.log(`File written to ${outFile}`); 