import normalizePort from './normalizePort';

describe('NormalizePort Method', () => {
    it('should return false for not a number', () => {
        expect(normalizePort('nan')).toEqual(false);
    });

    it('should return number for number in string type', () => {
        expect(normalizePort('3000')).toEqual(3000);
    });

    it('should return number for number type', () => {
        expect(normalizePort(3000)).toEqual(3000);
    });
});
