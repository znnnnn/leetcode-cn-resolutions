/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const ly = grid.length,
    lx = grid[0].length
  let total = 0,
    repeat = 0
  for (var i = 0; i < ly; i++) {
    for (var j = 0; j < lx; j++) {
      if (grid[i][j] !== 0) {
        total++
      }
      if (j + 1 < lx && grid[i][j] === grid[i][j + 1] && grid[i][j] === 1) {
        repeat++
      }
      if (i + 1 < ly && grid[i][j] === grid[i + 1][j] && grid[i][j] === 1) {
        repeat++
      }
    }
  }
  return total * 4 - repeat * 2
}
