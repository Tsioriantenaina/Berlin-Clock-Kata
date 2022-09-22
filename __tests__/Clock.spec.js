const {
    secondLightRow, 
    fiveHoursRow, 
    singleHoursRow,
    singleMinutesRow,
    fiveMinutesRow,
    entireBerlinClock
} = require('../services/ChangeToBerlinService');

describe('Berlin Clock', () => {

    /**
     * Second Row Test
     */
    describe('Second Row', () => {

        it('Should "Y" for "00" ', () => {
            expect(secondLightRow("00")).toBe("Y");
        });

        it('Should "O" for "01" ', () => {
            expect(secondLightRow("01")).toBe("O");
        });

        it('Should "O" for "59" ', () => {
            expect(secondLightRow("59")).toBe("O");
        });

        it('Should "O" for "20" ', () => {
            expect(secondLightRow("20")).toBe("Y");
        });

    });

    /**
     * Five Hours Row Test
     */
    describe('Five Hours Row', () => {

        it('Should "OOOO" for "00"', () => {
            expect(fiveHoursRow('00')).toBe("OOOO");
        });

        it('Should "RRRR" for "23"', () => {
            expect(fiveHoursRow('23')).toBe("RRRR");
        });

        it('Should "OOOO" for "02"', () => {
            expect(fiveHoursRow('02')).toBe("OOOO");
        });

        it('Should "ROOO" for "08"', () => {
            expect(fiveHoursRow('08')).toBe("ROOO");
        });

        it('Should "OOOO" for "04"', () => {
            expect(fiveHoursRow('04')).toBe("OOOO");
        });

        it('Should "ROOO" for "05"', () => {
            expect(fiveHoursRow('05')).toBe("ROOO");
        });

    });

    /**
     * Single Hours Row Test
     */
    describe('Single Hours Row', () => {

        it('Should "OOOO" for "00"', () => {
            expect(singleHoursRow('00')).toBe('OOOO');
        });

        it('Should "RRRO" for "23"', () => {
            expect(singleHoursRow('23')).toBe('RRRO');
        });

        it('Should "RROO" for "02"', () => {
            expect(singleHoursRow('02')).toBe('RROO');
        });

        it('Should "RRRO" for "08"', () => {
            expect(singleHoursRow('08')).toBe('RRRO');
        });

        it('Should "RRRR" for "14"', () => {
            expect(singleHoursRow('14')).toBe('RRRR');
        });

    });

    /**
     * Single Minutes Row test
     */
    describe('Single Minutes Row', () => {
        
        it('Should "OOOO" for "00"', () => {
            expect(singleMinutesRow('00')).toBe('OOOO');
        });

        it('Should "YYYY" for "59"', () => {
            expect(singleMinutesRow('59')).toBe('YYYY');
        });

        it('Should "YYOO" for "32"', () => {
            expect(singleMinutesRow('32')).toBe('YYOO');
        });

        it('Should "YYYY" for "34"', () => {
            expect(singleMinutesRow('34')).toBe('YYYY');
        });

        it('Should "OOOO" for "35"', () => {
            expect(singleMinutesRow('35')).toBe('OOOO');
        });
        
    });
    
    /**
     * Five Minutes Row Test
     */
    describe('Five Minutes Row', () => {

        it('Should "OOOOOOOOOOO" for "00"', () => {
            expect(fiveMinutesRow('00')).toBe('OOOOOOOOOOO');
        });

        it('Should "YYRYYRYYRYY" for "59"', () => {
            expect(fiveMinutesRow('59')).toBe('YYRYYRYYRYY');
        });

        it('Should "OOOOOOOOOOO" for "04"', () => {
            expect(fiveMinutesRow('04')).toBe('OOOOOOOOOOO');
        });

        it('Should "YYRYOOOOOOO" for "23"', () => {
            expect(fiveMinutesRow('23')).toBe('YYRYOOOOOOO');
        });

        it('Should "YYRYYRYOOOO" for "35"', () => {
            expect(fiveMinutesRow('35')).toBe('YYRYYRYOOOO');
        });

    });

    /**
     * Entire Berlin Clock Test
     */
    describe('Entire Berlin Clock', () => {

        it('Should "YOOOOOOOOOOOOOOOOOOOOOOO" for "00:00:00"', () => {
            expect(entireBerlinClock('00:00:00')).toBe('YOOOOOOOOOOOOOOOOOOOOOOO');
        });

        it('Should "ORRRRRRROYYRYYRYYRYYYYYY" for "23:59:59"', () => {
            expect(entireBerlinClock('23:59:59')).toBe('ORRRRRRROYYRYYRYYRYYYYYY');
        });

        it('Should "YRRROROOOYYRYYRYYRYOOOOO" for "16:50:06"', () => {
            expect(entireBerlinClock('16:50:06')).toBe('YRRROROOOYYRYYRYYRYOOOOO');
        });

        it('Should "ORROOROOOYYRYYRYOOOOYYOO" for "11:37:01"', () => {
            expect(entireBerlinClock('11:37:01')).toBe('ORROOROOOYYRYYRYOOOOYYOO');
        });

    });
});
