### [561\. 数组拆分 I](https://leetcode-cn.com/problems/array-partition-i/)

Difficulty: **简单**

给定长度为&amp;nbsp;<strong>2n&amp;nbsp;</strong>的数组, 你的任务是将这些数分成&amp;nbsp;<strong>n </strong>对, 例如 (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>) ，使得从1 到&amp;nbsp;n 的 min(a<sub>i</sub>, b<sub>i</sub>) 总和最大。</p>

<p>

给定长度为 **2n **的数组, 你的任务是将这些数分成 **n** 对, 例如 (a<sub style="display: inline;">1</sub>, b<sub style="display: inline;">1</sub>), (a<sub style="display: inline;">2</sub>, b<sub style="display: inline;">2</sub>), ..., (a<sub style="display: inline;">n</sub>, b<sub style="display: inline;">n</sub>) ，使得从1 到 n 的 min(a<sub style="display: inline;">i</sub>, b<sub style="display: inline;">i</sub>) 总和最大。

**示例 1:**

```
输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
```

**提示:**

1.  **n** 是正整数,范围在 [1, 10000].
2.  数组中的元素范围在 [-10000, 10000].

<strong>示例 1:</strong></p>

```

<strong>输入:</strong> [1,4,3,2]

<strong>输出:</strong> 4
<strong>解释:</strong> n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
```

<p><strong>提示:</strong></p>

<ol>
	<li><strong>n</strong>&amp;nbsp;是正整数,范围在 [1, 10000].</li>
	<li>数组中的元素范围在 [-10000, 10000].</li>
</ol>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  var sum = 0
  for (var i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }
  return sum
}
```