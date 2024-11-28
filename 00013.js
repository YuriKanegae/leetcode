/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let total         = 0;
    let previus_value = 0;
    for(const current of s.split("").reverse()) {
        const current_value = values[current];

        if(previus_value > current_value)   total -= current_value;
        else                                total += current_value;

        previus_value = current_value;
    }

    return total;
};