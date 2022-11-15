// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
describe('isPhoneNumber Test', () => {
    it('(123)-456-7890 is a phone number', () => {
        expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
    });
    it('123-456-7890 is a phone number', () => {
        expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
    });

    it('0 is not a phone number', () => {
        expect(functions.isPhoneNumber("0")).toBe(false);
    });
    it('null is not a phone number', () => {
        expect(functions.isPhoneNumber(null)).toBe(false);
    });
});

describe('isEmail Test', () => {
    it('a@a.com is an email', () => {
        expect(functions.isEmail("a@a.com")).toBe(true);
    });
    it('hwen@ucsd.edu is an email', () => {
        expect(functions.isEmail("hwen@ucsd.edu")).toBe(true);
    });

    it('hwen@ucsd.edu. is not an email', () => {
        expect(functions.isEmail("hwen@ucsd.edu.")).toBe(false);
    });
    it('null is not an email', () => {
        expect(functions.isEmail(null)).toBe(false);
    });
});

describe('isStrongPassword Test', () => {
    it('a123 is a strong password', () => {
        expect(functions.isStrongPassword("a123")).toBe(true);
    });
    it('a_1_A3dzq is a strong password', () => {
        expect(functions.isStrongPassword("a_1_A3dzq")).toBe(true);
    });

    it('0 is not a strong password', () => {
        expect(functions.isStrongPassword("0")).toBe(false);
    });
    it('aaaaaaaaaaaaaaaaaaaa is not a strong password', () => {
        expect(functions.isStrongPassword("aaaaaaaaaaaaaaaaaaaa")).toBe(false);
    });
});

describe('isDate Test', () => {
    it('11/15/2022 is a date', () => {
        expect(functions.isDate("11/15/2022")).toBe(true);
    });
    it('1/1/2023 is a date', () => {
        expect(functions.isDate("1/1/2023")).toBe(true);
    });

    it('1/1//2023 is not a date', () => {
        expect(functions.isDate("1/1//2023")).toBe(false);
    });
    it('null is not a date', () => {
        expect(functions.isDate(null)).toBe(false);
    });
});

describe('isHexColor Test', () => {
    it('#FFFFFF is a hex color', () => {
        expect(functions.isHexColor("#FFFFFF")).toBe(true);
    });
    it('000 is a hex color', () => {
        expect(functions.isHexColor("000")).toBe(true);
    });

    it('FFFFF is not a hex color', () => {
        expect(functions.isHexColor("FFFFF")).toBe(false);
    });
    it('null is not a hex color', () => {
        expect(functions.isHexColor(null)).toBe(false);
    });
});