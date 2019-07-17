<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-17 15:35:55
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-17 15:36:00
 -->
### [350\. 两个数组的交集 IICopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

Difficulty: **简单**

给定两个数组，编写一个函数来计算它们的交集。</p>

<p>

给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

**示例 2:**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]```

**说明：**

*   输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
*   我们可以不考虑输出结果的顺序。

****进阶:****

*   如果给定的数组已经排好序呢？你将如何优化你的算法？
*   如果 _nums1 _的大小比 _nums2 _小很多，哪种方法更优？
*   如果 _nums2 _的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

<strong>示例 1:</strong></p>

```
<strong>输入: </strong>nums1 = [1,2,2,1], nums2 = [2,2]
<strong>输出: </strong>[2,2]
```

<p><strong>示例 2:</strong></p>

```
<strong>输入: </strong>nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>输出: </strong>[4,9]```

<p><strong>说明：</strong></p>

<ul>
	<li>输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。</li>
	<li>我们可以不考虑输出结果的顺序。</li>
</ul>

<p><strong><strong>进阶:</strong></strong></p>

<ul>
	<li>如果给定的数组已经排好序呢？你将如何优化你的算法？</li>
	<li>如果&amp;nbsp;<em>nums1&amp;nbsp;</em>的大小比&amp;nbsp;<em>nums2&amp;nbsp;</em>小很多，哪种方法更优？</li>
	<li>如果&amp;nbsp;<em>nums2&amp;nbsp;</em>的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？</li>
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
var intersect = function(nums1, nums2) {
    let result = []
    let hashMap = {}
    for(let i of nums1) {
        if(hashMap.hasOwnProperty(i)) {
            hashMap[i] += 1
        } else {
            hashMap[i] = 1
        }
    }
    
    for(let p of nums2 ) {
        if(hashMap[p] >0){
            result.push(p)
            hashMap[p] -=1
        }
    }
    return result
};
```