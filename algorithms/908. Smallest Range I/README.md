### [908\. 最小差值 I](https://leetcode-cn.com/problems/smallest-range-i/)

Difficulty: **简单**


给定一个整数数组 `A`，对于每个整数 `A[i]`，我们可以选择任意 `x` 满足 `-K <= x <= K`，并将 `x` 加到 `A[i]` 中。

在此过程之后，我们得到一些数组 `B`。

返回 `B` 的最大值和 `B` 的最小值之间可能存在的最小差值。

**示例 1：**

```
输入：A = [1], K = 0
输出：0
解释：B = [1]
```

**示例 2：**

```
输入：A = [0,10], K = 2
输出：6
解释：B = [2,8]
```

**示例 3：**

```
输入：A = [1,3,6], K = 3
输出：0
解释：B = [3,3,3] 或 B = [4,4,4]
```

**提示：**

1.  `1 <= A.length <= 10000`
2.  `0 <= A[i] <= 10000`
3.  `0 <= K <= 10000`


#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  let results = Math.max(...A) - Math.min(...A) - 2 * K
  return results > 0 ? results : 0
}
```