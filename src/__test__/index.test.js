const randomString = require('../index');

describe('test function randomString', () => {
    test('is a string', () => {
        expect(typeof (randomString())).toBe('string')
    });
    test('city not exist', () => {
        expect(randomString()).not.toMatch(/Cordoba/)
    });
});
