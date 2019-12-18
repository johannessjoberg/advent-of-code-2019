const { toArray, readFile } = require('../utils');

const recursiveSum = (map, parent, accumulator = 0) => {
    if (parent === 'COM') {
        return accumulator + 1;
    }
    return recursiveSum(map, map[parent], accumulator + 1);
};
const getOrbitMap = (array) => array.reduce((acc, val) => {
    const [parent, child] = val.split(')');
    acc[child] = parent;
    return acc;
}, {});

exports.one = (array) => {
    const orbitMap = getOrbitMap(array);
    return Object.values(orbitMap).reduce((acc, parent) => {
        return acc + recursiveSum(orbitMap, parent);
    }, 0);
};

const recursiveStepper = (map, parent, stepAccumulator = []) => {
    const nextStepAcc = [...stepAccumulator, parent];
    if (parent === 'COM') {
        return nextStepAcc;
    }
    return recursiveStepper(map, map[parent], nextStepAcc);
};
exports.two = (array) => {
    const orbitMap = getOrbitMap(array);
    const youOrbits = recursiveStepper(orbitMap, 'YOU');
    const sanOrbits = recursiveStepper(orbitMap, 'SAN');
    for (let i = 0; i < youOrbits.length; i++ ) {
        for (let j = 0; j < sanOrbits.length; j++ ) {
            if (youOrbits[i] === sanOrbits[j]) {
                return i+j-2;
            }
        }
    }
};

exports.run = () => {
    const array = toArray(readFile('06/data.txt'));
    console.log('one', exports.one(array));
    console.log('two', exports.two(array));
};
