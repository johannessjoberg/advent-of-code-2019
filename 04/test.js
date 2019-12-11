const { isValidPasswordOne, isValidPasswordTwo } = require('./index');

describe('04', () => {
    it('isValidPasswordOne a', () => {
        const result = isValidPasswordOne(111111);
        const expected = true;
        expect(result).toStrictEqual(expected);
    });
    it('isValidPasswordOne a', () => {
        const result = isValidPasswordOne(223450);
        const expected = false;
        expect(result).toStrictEqual(expected);
    });
    it('isValidPasswordOne a', () => {
        const result = isValidPasswordOne(123789);
        const expected = false;
        expect(result).toStrictEqual(expected);
    });


    it('isValidPasswordTwo a', () => {
        const result = isValidPasswordTwo(112233);
        const expected = true;
        expect(result).toStrictEqual(expected);
    });
    it('isValidPasswordTwo b', () => {
        const result = isValidPasswordTwo(123444);
        const expected = false;
        expect(result).toStrictEqual(expected);
    });
    it('isValidPasswordTwo c', () => {
        const result = isValidPasswordTwo(111122);
        const expected = true;
        expect(result).toStrictEqual(expected);
    });
});
