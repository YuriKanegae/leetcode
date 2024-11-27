/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pair  = { 
        "}": "{",
        "]": "[",
        ")": "(",
    }

    const queue = [];
    for(const character of s.split("")) {
        if(["(", "{", "["].includes(character))
            queue.push(character);
        else if(pair[character] != queue.pop())
                return false;
    }

    return queue.length == 0;
};