/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0].split("");

    for(const current_str of strs) {
        const current_parts = current_str.split("");

        prefix.forEach((character, index) => {
            if(character != current_parts[index]) {
                prefix = prefix.splice(0, index);
                return;
            }
        });
    }

    return prefix.join("");
};