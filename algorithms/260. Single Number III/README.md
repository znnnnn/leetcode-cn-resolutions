### [260\. 只出现一次的数字 IIICopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/single-number-iii/)

Difficulty: **中等**

给定一个整数数组&amp;nbsp;<code>nums</code>，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。</p>

<p>

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

**示例 :**

```
输入: [1,2,1,3,2,5]
输出: [3,5]```

**注意：**

1.  结果输出的顺序并不重要，对于上面的例子， `[5, 3]` 也是正确答案。
2.  你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

<strong>示例 :</strong></p>

```
<strong>输入:</strong> <code>[1,2,1,3,2,5]</code>
<strong>输出:</strong> <code>[3,5]</code>```

<p><strong>注意：</strong></p>

<ol>
	<li>结果输出的顺序并不重要，对于上面的例子，&amp;nbsp;<code>[5, 3]</code>&amp;nbsp;也是正确答案。</li>
	<li>你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？</li>
</ol>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    set.has(num) ? set.delete(num) : set.add(num)
  }
  return [...set]
}
​
```