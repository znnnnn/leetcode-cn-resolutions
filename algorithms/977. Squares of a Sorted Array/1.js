/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map( a => Math.pow(a, 2) ).sort((a,b) => a-b)
};