// Test Strings
const text = "Hello World";
test('Should have text', () => {
    expect(text).toMatch(/Hello/);
});

// Test Arrays
const fruits = ['apple', 'banana', 'grapes']
test('¿Do you have banana?', () => {
    expect(fruits).toContain('banana');
});

// Test Numbers
test('should be greater than', () => {
    expect(10).toBeGreaterThan(9);
});

// Test Booleans
test('should be true', () => {
    expect(true).toBeTruthy();
});

// Test Callbacks
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};
test('test callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
});

// Test Promise
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        !str ? reject(Error('Error')) : resolve(str.split("").reverse().join(""));
    })
}
test('test promise', () => {
    return reverseString2('Hola').then(str => {
        expect(str).toBe('aloH')
    })
});

// Test Async/await
test('test async/await', async () => {
    const str = await reverseString2('Hola');
    expect(str).toBe('aloH');
});

// beforeEach(() => console.log('Before Each Test'));
// beforeAll(() => console.log('Before All Test'));
// afterEach(() => console.log('After Each Test'));
// afterAll(() => console.log('After All Test'));