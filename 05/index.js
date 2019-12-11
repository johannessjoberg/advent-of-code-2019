const { toArrayOfNumbers } = require('../utils');
function getPaddedString(number, size = 5) {
    const withZeroes = '00000000000' + number;
    return withZeroes.substring(withZeroes.length - size);
}
exports.solver = (a, input) => {
    const output = [];
    const array = [...a].map(n => ~~n);
    let i = 0;
    while (i < array.length) {
        const firstProp = getPaddedString(array[i]);
        const optCode = ~~firstProp.substring(3);
        if (optCode === 99) {
            break;
        }
        let incrementor = optCode > 2 ? 2 : 4;
        incrementor = optCode > 4 ? 3 : incrementor;
        incrementor = optCode > 6 ? 4 : incrementor;
        const optSequence = array.slice(i, i + incrementor);
        let nextInstruction = i + incrementor;
        const parameter1Mode = ~~firstProp.substring(2, 3);
        const parameter2Mode = ~~firstProp.substring(1, 2);
        const parameter1Value = parameter1Mode
            ? optSequence[1]
            : array[optSequence[1]];
        const parameter2Value = parameter2Mode
            ? optSequence[2]
            : array[optSequence[2]];

        if (optCode === 1) {
            array[optSequence[3]] = parameter1Value + parameter2Value;
        }
        if (optCode === 2) {
            array[optSequence[3]] = parameter1Value * parameter2Value;
        }
        if (optCode === 3) {
            array[optSequence[1]] = input;
        }
        if (optCode === 4) {
            output.push(parameter1Value);
        }
        if (optCode === 5 && parameter1Value) {
            nextInstruction = parameter2Value;
        }
        if (optCode === 6 && !parameter1Value) {
            nextInstruction = parameter2Value;
        }
        if (optCode === 7) {
            array[optSequence[3]] = parameter1Value < parameter2Value ? 1 : 0;
        }
        if (optCode === 8) {
            array[optSequence[3]] = parameter1Value === parameter2Value ? 1 : 0;
        }
        i = nextInstruction;
    }

    return output;
};

exports.one = (array) => {
    const solution = exports.solver(array, 1);
    console.log('Problem one start');
    solution.forEach((number) => console.log(number));
    console.log('Problem one end');
};

exports.two = (array) => {
    const solution = exports.solver(array, 5);
    console.log('Problem two start');
    solution.forEach((number) => console.log(number));
    console.log('Problem two end');
};
exports.run = () => {
    const array = toArrayOfNumbers('05/data.txt', ',');
    exports.one(array);
    exports.two(array);
};
