const { toArrayOfNumbers } = require('../utils');

exports.one = (a, noun, verb) => {
    const array = [...a];
    array[1] = noun;
    array[2] = verb;
    let i = 0;
    while (i < array.length) {
        const optSequence = array.slice(i, i+4);
        const optCode = optSequence[0];
        if (optCode === 99) {
            break;
        }

        if (optCode === 1) {
            array[optSequence[3]] = array[optSequence[1]] + array[optSequence[2]];
        }

        if (optCode === 2) {
            array[optSequence[3]] = array[optSequence[1]] * array[optSequence[2]];
        }
        i = i + 4;
    }
    return array;
};

exports.two = (array, outputToFind = 19690720) => {
    const range = [...new Array(100)].map((v,i) => i);
    let solution = null;
    try {
        range.forEach((noun) => {
            range.forEach((verb) => {
                const result = exports.one(array, noun, verb)[0];

                if (result === outputToFind) {
                    solution = 100 * noun + verb;
                    throw new Error('Solution found');
                }
            })
        });
    } catch (e) {}

    return solution;
};

const array = toArrayOfNumbers('02/data.txt', ',');
console.log('one', exports.one(array, 12, 2));
console.log('two', exports.two(array));
