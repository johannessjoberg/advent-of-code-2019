const { one, two } = require('./index');

describe('03', () => {
    it('one', () => {
        const result = one(
            'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(','),
            'U62,R66,U55,R34,D71,R55,D58,R83'.split(',')
        );
        const expected = 159;
        expect(result).toStrictEqual(expected);
    });
    it('two', () => {
        const result = two(
            'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(','),
            'U62,R66,U55,R34,D71,R55,D58,R83'.split(',')
        );
        const expected = 610;
        expect(result).toStrictEqual(expected);
    });
});
