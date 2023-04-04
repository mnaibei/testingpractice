const capitalize = require('./capitalize')

test("First letter should be capitalized", () => {
    expect(capitalize("car")).toBe("Car")
})