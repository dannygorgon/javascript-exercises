const repeatString = function(str, num) {
    let result = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            result += str
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
