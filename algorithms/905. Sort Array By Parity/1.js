/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const uneven = []
    const even = []
    A.map(val => val%2 ? uneven.push(val): even.push(val))
    return even.concat(uneven)
};