const { toArrayOfNumbers } = require('../utils');

const massToFuel = (mass) => Math.floor(mass / 3) - 2;
const recursiveFuelCalculator = (acc, fuel) => {
	const fuelRequiredByFuel = massToFuel(fuel);

	if (fuelRequiredByFuel >= 6) {
		return recursiveFuelCalculator(acc + fuelRequiredByFuel, fuelRequiredByFuel);
	}

	return acc + fuelRequiredByFuel;
};

const one = (fileName) => {
    const array = toArrayOfNumbers(fileName);

    return array.reduce((acc, val) => {
    	return acc + massToFuel(val);
	}, 0);
};

const two = (fileName) =>  {
	const array = toArrayOfNumbers(fileName);

	return array.reduce((acc, val) => {
		return acc + recursiveFuelCalculator(0, val);
	}, 0);
};

console.log('one', one('01/data.txt'));
console.log('two', two('01/data.txt'));
