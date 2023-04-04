const stringLength = require('./stringLength')

// checks if function takes args and returns count 
test('Return count', () => {
    expect(stringLength("abcd")).toBe(4)
})

//checks if length of string is greater than 10
test('length not greater than 10', () => {
    expect(stringLength("abcdefghij")).toBeLessThanOrEqual(10)
}) 

//checks if length of string is less than 0
test('length not less than 0', () => {
    expect(stringLength("")).toBe(0)
}) 