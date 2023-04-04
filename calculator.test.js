const calculator = require('./calculator')

describe('calculator', () => {
    test('Addition', () => {
        expect(calculator.add(2, 2)).toBe(4)
    })
    test('Multiplication', () => {
        expect(calculator.multiply(2, 2)).toBe(4)
    })
    test('Division', () => {
        expect(calculator.divide(2, 2)).toBe(1)
    })
    test('Subtraction', () => {
        expect(calculator.subtract(2, 2)).toBe(0)
    })
})