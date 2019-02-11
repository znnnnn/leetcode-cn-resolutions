/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  while (i > -1 && j < matrix[0].length) {
    if (matrix[i][j] == target) {
      return true;
    }
    if (matrix[i][j] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};