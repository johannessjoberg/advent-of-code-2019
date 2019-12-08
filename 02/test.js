const { one } = require('./index');

describe('02', () => {
    it('one', () => {
        const input = [1,0,0,0,99];
        const expected = [2,0,0,0,99];

        expect(one(input)).toEqual(expected);
    });
});
