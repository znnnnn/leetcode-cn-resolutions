<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-09 17:05:38
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-09 17:13:03
 -->
### [62\. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

Difficulty: **中等**

一个机器人位于一个 <em>m x n </em>网格的左上角 （起始点在下图中标记为“Finish”）。</p>

<p>机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为&amp;ldquo;Finish&amp;rdquo;）。</p>

<p>问总共有多少条不同的路径？</p>

<p>

一个机器人位于一个 _m x n_ 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png)

<small style="display: inline;">例如，上图是一个7 x 3 的网格。有多少可能的路径？</small>

**说明：**_m_ 和 _n_ 的值均不超过 100。

**示例 1:**

```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1\. 向右 -> 向右 -> 向下
2\. 向右 -> 向下 -> 向右
3\. 向下 -> 向右 -> 向右
```

**示例 2:**

```
输入: m = 7, n = 3
输出: 28```

<img src=&quot;https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png&quot;></p>

<p><small>例如，上图是一个7 x 3 的网格。有多少可能的路径？</small></p>

<p><strong>说明：</strong><em>m</em>&amp;nbsp;和 <em>n </em>的值均不超过 100。</p>

<p><strong>示例&amp;nbsp;1:</strong></p>

```
<strong>输入:</strong> m = 3, n = 2
<strong>输出:</strong> 3
<strong>解释:</strong>
从左上角开始，总共有 3 条路径可以到达右下角。
1\. 向右 -&amp;gt; 向右 -&amp;gt; 向下
2\. 向右 -&amp;gt; 向下 -&amp;gt; 向右
3\. 向下 -&amp;gt; 向右 -&amp;gt; 向右
```

<p><strong>示例&amp;nbsp;2:</strong></p>

```
<strong>输入:</strong> m = 7, n = 3
<strong>输出:</strong> 28```
" class="notranslate" style="display: block;">

#### Solution

思路：https://leetcode-cn.com/problems/unique-paths/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-20/

Language: **JavaScript**

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(m).fill(1);
​
    //从右向左更新所有列
    for (let i = n - 2; i >= 0; i--) {
    
        
        for (let j = m - 2; j >= 0; j--) {
            //右边的和下边的更新当前元素
            dp[j] = dp[j] + dp[j + 1];
​
        }
    }
​
    return dp[0];
};
```