const { toArray, readFile } = require('../utils');

function Point({
    x = 0,
    y = 0,
    totalTravelDistance = 0,
    r = 0,
    l = 0,
    u = 0,
    d = 0,
} = {}) {
    this.x = x + r - l;
    this.y = y + u - d;
    this.toString = () => `X${this.x}Y${this.y}`;
    this.manhattanDistanceFromStart = Math.abs(this.x) + Math.abs(this.y);
    this.totalTravelDistance =
        totalTravelDistance +
        Math.abs(r) +
        Math.abs(l) +
        Math.abs(u) +
        Math.abs(d);
}

const getPoints = (line) =>
    line.reduce((acc, directionValue, index) => {
        const direction = directionValue.substring(0, 1);
        const distance = ~~directionValue.substring(1);
        const range = [...new Array(distance)].map((v, i) => i + 1);
        // previous point
        const { x, y, totalTravelDistance } =
            index === 0 ? new Point() : acc[acc.length - 1];
        const newPoints = range.map(
            (localDistance) =>
                new Point({
                    x,
                    y,
                    totalTravelDistance,
                    [direction.toLowerCase()]: localDistance,
                })
        );
        return [...acc, ...newPoints];
    }, []);

const createMap = (array) =>
    array.reduce((acc, point) => {
        if (!acc.has(point.toString())) {
            acc.set(point.toString(), point);
        }

        return acc;
    }, new Map());

exports.one = (line1, line2) => {
    const line1Map = createMap(getPoints(line1));
    const line2Map = createMap(getPoints(line2));
    const intersectionDistances = [];
    line1Map.forEach((pointOnLine1, key) => {
        if (line2Map.has(key)) {
            intersectionDistances.push(pointOnLine1.manhattanDistanceFromStart);
        }
    });

    return intersectionDistances.sort((a, b) => a - b)[0];
};
exports.two = (line1, line2) => {
    const line1Map = createMap(getPoints(line1));
    const line2Map = createMap(getPoints(line2));
    const intersectionDistances = [];
    line1Map.forEach((pointOnLine1, key) => {
        if (line2Map.has(key)) {
            const pointOnLine2 = line2Map.get(key);
            intersectionDistances.push(
                pointOnLine1.totalTravelDistance +
                    pointOnLine2.totalTravelDistance
            );
        }
    });

    return intersectionDistances.sort((a, b) => a - b)[0];
};

exports.run = () => {
    const array = toArray(readFile('03/data.txt')).map((line) =>
        toArray(line, ',')
    );
    console.log('one', exports.one(array[0], array[1]));
    console.log('two', exports.two(array[0], array[1]));
};
