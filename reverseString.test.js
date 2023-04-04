const reverseString = require('./reverseString')

test('String is reversed', () => {
    expect(reverseString("abcd")).toBe("dcba")
})