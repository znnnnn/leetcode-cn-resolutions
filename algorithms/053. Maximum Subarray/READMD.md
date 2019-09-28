### [53\. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

Difficulty: **简单**

给定一个整数数组 <code>nums</code>&amp;nbsp;，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>

<p>

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例:**

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

**进阶:**

如果你已经实现复杂度为 O(_n_) 的解法，尝试使用更为精妙的分治法求解。

<strong>示例:</strong></p>

```
<strong>输入:</strong> [-2,1,-3,4,-1,2,1,-5,4],
<strong>输出:</strong> 6
<strong>解释:</strong>&amp;nbsp;连续子数组&amp;nbsp;[4,-1,2,1] 的和最大，为&amp;nbsp;6。
```

<p><strong>进阶:</strong></p>

<p>如果你已经实现复杂度为 O(<em>n</em>) 的解法，尝试使用更为精妙的分治法求解。</p>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let thisSum = 0
  let maxSum = nums[0]

  for (let i of nums) {
    if (thisSum > 0) {
      thisSum += i
    } else {
      thisSum = i
    }
    maxSum = Math.max(maxSum, thisSum)
  }
  return maxSum
}
```