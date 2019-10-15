/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  let results = (Math.max(...A) - Math.min(...A) - 2 * K)
  return results > 0 ? results : 0;
};