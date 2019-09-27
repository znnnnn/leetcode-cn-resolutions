### [977\. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

Difficulty: **简单**

给定一个按非递减顺序排序的整数数组 <code>A</code>，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。</p>

<p>&amp;nbsp;</p>

<p>

给定一个按非递减顺序排序的整数数组 `A`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

**示例 1：**

```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```

**示例 2：**

```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

1.  `1 <= A.length <= 10000`
2.  `-10000 <= A[i] <= 10000`
3.  `A` 已按非递减顺序排序。

<strong>示例 1：</strong></p>

```
<strong>输入：</strong>[-4,-1,0,3,10]
<strong>输出：</strong>[0,1,9,16,100]
```

<p><strong>示例 2：</strong></p>

```
<strong>输入：</strong>[-7,-3,2,3,11]
<strong>输出：</strong>[4,9,9,49,121]
```

<p>&amp;nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li><code>1 &amp;lt;= A.length &amp;lt;= 10000</code></li>
	<li><code>-10000 &amp;lt;= A[i] &amp;lt;= 10000</code></li>
	<li><code>A</code>&amp;nbsp;已按非递减顺序排序。</li>
</ol>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map( a => Math.pow(a, 2) ).sort((a,b) => a-b)
};
```