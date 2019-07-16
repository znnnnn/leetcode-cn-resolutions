<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-16 21:58:16
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-16 21:58:21
 -->
### [268\. 缺失数字Copy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/missing-number/)

Difficulty: **简单**

给定一个包含 <code>0, 1, 2, ..., n</code>&amp;nbsp;中&amp;nbsp;<em>n</em>&amp;nbsp;个数的序列，找出 0 .. <em>n</em>&amp;nbsp;中没有出现在序列中的那个数。</p>

<p>

给定一个包含 `0, 1, 2, ..., n` 中 _n_ 个数的序列，找出 0 .. _n_ 中没有出现在序列中的那个数。

**示例 1:**

```
输入: [3,0,1]
输出: 2
```

**示例 2:**

```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```

**说明:**  
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

<strong>示例 1:</strong></p>

```
<strong>输入:</strong> [3,0,1]
<strong>输出:</strong> 2
```

<p><strong>示例&amp;nbsp;2:</strong></p>

```
<strong>输入:</strong> [9,6,4,2,3,5,7,0,1]
<strong>输出:</strong> 8
```

<p><strong>说明:</strong><br>
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?</p>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missing = nums.length
    for (let i=0;i<missing;i++) {
        missing = missing ^ i
    }
    return missing
};
```