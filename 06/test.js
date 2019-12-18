const { one, two } = require('./index');

describe('03', () => {
    it('one', () => {
        const string =
            'COM)B\n' +
            'B)C\n' +
            'C)D\n' +
            'D)E\n' +
            'E)F\n' +
            'B)G\n' +
            'G)H\n' +
            'D)I\n' +
            'E)J\n' +
            'J)K\n' +
            'K)L';
        const result = one(string.split('\n'));
        const expected = 42;
        expect(result).toStrictEqual(expected);
    });
    // it('two', () => {
    //     const result = two(
    //         'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(','),
    //         'U62,R66,U55,R34,D71,R55,D58,R83'.split(',')
    //     );
    //     const expected = 610;
    //     expect(result).toStrictEqual(expected);
    // });
});
