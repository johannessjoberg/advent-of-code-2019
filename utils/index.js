const fs = require('fs');
const path = require('path');

exports.readFile = (file) =>
    fs.readFileSync(path.join(__dirname, '..', file)).toString();

exports.toArray = (data, separator = '\n') =>
    String(data)
        .trim()
        .split(separator);

exports.toArrayOfNumbers = (file, separator) =>
    exports.toArray(exports.readFile(file), separator).map((n) => ~~n);
