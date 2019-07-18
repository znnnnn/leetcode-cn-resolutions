<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-18 21:25:22
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-18 21:25:23
 -->
### [349\. 两个数组的交集Copy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

Difficulty: **简单**

给定两个数组，编写一个函数来计算它们的交集。</p>

<p>

给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
```

**示例 2:**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]```

**说明:**

*   输出结果中的每个元素一定是唯一的。
*   我们可以不考虑输出结果的顺序。

<strong>示例 1:</strong></p>

```
<strong>输入: </strong>nums1 = [1,2,2,1], nums2 = [2,2]
<strong>输出: </strong>[2]
```

<p><strong>示例 2:</strong></p>

```
<strong>输入: </strong>nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>输出: </strong>[9,4]```

<p><strong>说明:</strong></p>

<ul>
	<li>输出结果中的每个元素一定是唯一的。</li>
	<li>我们可以不考虑输出结果的顺序。</li>
</ul>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    let res = [];
    for(let key of nums1.keys()) {
        if (nums2.has(key)) {
            res.push(key);
        }
    }
    return res;
};
```