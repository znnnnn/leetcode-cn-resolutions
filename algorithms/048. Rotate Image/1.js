/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
  let length = matrix.length - 1;
  for (let y = 0; y < length / 2; y++) {
      for (let x = y; x < length - y; x++) {
          let temp = matrix[y][x];
          matrix[y][x] = matrix[length - x][y];
          matrix[length - x][y] = matrix[length - y][length - x];
          matrix[length - y][length - x] = matrix[x][length - y]
          matrix[x][length - y] = temp; 
      }
  }
};