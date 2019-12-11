const getArrayOfNumbers = (number) =>
    number
        .toString()
        .split('')
        .map((n) => ~~n);
const containsDuplicates = (array) => new Set(array).size !== array.length;
const isDecreasing = (array) => {
    for (let i = 0; i < 5; i++) {
        if (array[i] > array[i + 1]) {
            return true;
        }
    }

    return false;
};
const containsInvalidGroup = (array) => {
    for (let i = 0; i < 5; i++) {
        if (
            array[i] === array[i + 1] &&
            array[i] !== array[i - 1] &&
            array[i] !== array[i + 2]
        ) {
            return false;
        }
    }

    return true;
};
exports.isValidPasswordOne = (number) => {
    const array = getArrayOfNumbers(number);
    if (isDecreasing(array)) return false;

    return containsDuplicates(array);
};

exports.isValidPasswordTwo = (number) => {
    const array = getArrayOfNumbers(number);
    if (isDecreasing(array)) return false;
    if (containsInvalidGroup(array)) return false;

    return containsDuplicates(array);
};
const getCount = (validator) => (startRange, endRange) => {
    let count = 0;
    for (let i = startRange; i < endRange; i++) {
        if (validator(i)) {
            count++;
        }
    }

    return count;
};

exports.one = getCount(exports.isValidPasswordOne);
exports.two = getCount(exports.isValidPasswordTwo);
exports.run = () => {
    console.log('one', exports.one(234208, 765869));
    console.log('two', exports.two(234208, 765869));
};
