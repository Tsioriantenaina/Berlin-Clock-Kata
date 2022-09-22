const { requestInputValidation } = require("../services/validationServices");

describe('Input validation', () => {

    it('Should return an error', () => {
        expect(requestInputValidation('2.4', '00', '00')).toContain('"Hour, minute, second" does not have a special character');
    });

    it('Should return an NaN', () => {
        expect(requestInputValidation('asasas', '00', '00')).toContain('"Hour, minute, second" must a letter 0 to 9');
    });

    it('Should return an "-"', () => {
        expect(requestInputValidation('-24', '00', '00')).toContain('"Hour, minute, second" does not have a special character');
    });

    it('Should return an "+"', () => {
        expect(requestInputValidation('24', '+100', '00')).toContain('"Hour, minute, second" does not have a special character');
    });

    it('Should return "error"', () => {
        expect(requestInputValidation('02', '00', '60')).toContain('"Hour, minute, second" does not bigger than "24, 59, 59"');
    });

    it('Should return "error"', () => {
        expect(requestInputValidation('30', '00', '59')).toContain('"Hour, minute, second" does not bigger than "24, 59, 59"');
    });
});