/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let response    = [];
    const hash      = {};

    nums.forEach( (number, index) => {
        const complement_number = target - number;
        const complement_index  = hash[complement_number];

        if(complement_index !== undefined)
            response = [ complement_index, index ];
        else
            hash[number] = index;
    } );

    return response;
};