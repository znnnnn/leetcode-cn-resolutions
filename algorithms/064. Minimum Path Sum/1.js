/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var n = grid.length

  if (n == 0) return 0

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < grid[i].length; j++) {

      if (!i && !j) continue

      // 动态规划：每次判断  grid[i][j]的上方和左边的值哪个小，哪个小加哪个，加到最后便是最小值
      grid[i][j] = Math.min((i ? grid[i - 1][j] : Number.MAX_VALUE), (j ? grid[i][j - 1] : Number.MAX_VALUE)) + grid[i][j]
      //console.log(i ? grid[i - 1][j] : Number.MAX_VALUE)
      //console.log(j,j ? grid[i][j - 1] : Number.MAX_VALUE)
      //console.log(grid[i][j])
    }
  }

  return grid[n - 1][grid[0].length - 1]
};