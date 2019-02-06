### [64\. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/submissions/)

难度: **中等**

给定一个包含非负整数的 *m* x *n*  网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

**示例:**

```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var n = grid.length;

  if (n == 0) return 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!i && !j) continue;

      // 动态规划：每次判断  grid[i][j]的上方和左边的值哪个小，哪个小加哪个，加到最后便是最小值
      grid[i][j] =
        Math.min(
          i ? grid[i - 1][j] : Number.MAX_VALUE,
          j ? grid[i][j - 1] : Number.MAX_VALUE
        ) + grid[i][j];
      //console.log(i ? grid[i - 1][j] : Number.MAX_VALUE)
      //console.log(j,j ? grid[i][j - 1] : Number.MAX_VALUE)
      //console.log(grid[i][j])
    }
  }

  return grid[n - 1][grid[0].length - 1];
};
```

Language: **Java**

```java
class Solution {
    public int minPathSum(int[][] grid) {
       if(grid == null)return 0;
        for(int i = 0; i < grid.length; i++)
            for(int j = 0; j < grid[0].length; j++)
                if(i == 0 && j != 0)grid[i][j] += grid[i][j-1];
                else if(i != 0 && j == 0)grid[i][j] += grid[i-1][j];
                else if(i == 0 && j == 0)continue;
                else grid[i][j] = Math.min(grid[i-1][j] + grid[i][j],grid[i][j-1] + grid[i][j]);
                
        return grid[grid.length-1][grid[0].length-1];      
    }
}
            }
```
