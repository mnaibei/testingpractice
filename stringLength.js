function stringLength(string) {
    if (string.length < 0 || string.length > 10) {
        throw new Error("Length is less than 0 or more than 10")
    } else {
        return string.length;
    }
}

module.exports = stringLength;