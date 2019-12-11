const { solver } = require('./index');

describe('05', () => {
    it('two a', () => {
        expect(solver("3,9,8,9,10,9,4,9,99,-1,8".split(','), 8)).toStrictEqual([1]);
    });
    it('two b', () => {
        expect(solver("3,9,8,9,10,9,4,9,99,-1,8".split(','), 1337)).toStrictEqual([0]);
    });
    it('two c', () => {
        expect(solver("3,9,7,9,10,9,4,9,99,-1,8".split(','), 7)).toStrictEqual([1]);
    });
    it('two d', () => {
        expect(solver("3,9,7,9,10,9,4,9,99,-1,8".split(','), 9)).toStrictEqual([0]);
    });
    it('two e', () => {
        expect(solver("3,3,1108,-1,8,3,4,3,99".split(','), 8)).toStrictEqual([1]);
    });
    it('two f', () => {
        expect(solver("3,3,1108,-1,8,3,4,3,99".split(','), 7)).toStrictEqual([0]);
    });
    it('two g', () => {
        expect(solver("3,3,1107,-1,8,3,4,3,99".split(','), 7)).toStrictEqual([1]);
    });
    it('two h', () => {
        expect(solver("3,3,1107,-1,8,3,4,3,99".split(','), 9)).toStrictEqual([0]);
    });
    it('two i', () => {
        expect(solver("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9".split(','), 0)).toStrictEqual([0]);
    });
    it('two j', () => {
        expect(solver("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9".split(','), 1)).toStrictEqual([1]);
    });
    it('two k', () => {
        expect(solver("3,3,1105,-1,9,1101,0,0,12,4,12,99,1".split(','), 0)).toStrictEqual([0]);
    });
    it('two l', () => {
        expect(solver("3,3,1105,-1,9,1101,0,0,12,4,12,99,1".split(','), -1)).toStrictEqual([1]);
    });
    const array = "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99".split(',');
    it('two x', () => {
        expect(solver(array, 7)).toStrictEqual([999]);
    });
    it('two y', () => {
        expect(solver(array, 8)).toStrictEqual([1000]);
    });
    it('two z', () => {
        expect(solver(array, 9)).toStrictEqual([1001]);
    });
});
