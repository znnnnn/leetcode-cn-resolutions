<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-08-08 17:15:31
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-08-08 17:15:31
 -->
### [66\. 加一Copy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/plus-one/)

Difficulty: **简单**

给定一个由<strong>整数</strong>组成的<strong>非空</strong>数组所表示的非负整数，在该数的基础上加一。</p>

<p>最高位数字存放在数组的首位， 数组中每个元素只存储<strong>单个</strong>数字。</p>

<p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p>

<p>

给定一个由**整数**组成的**非空**数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1:**

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

**示例 2:**

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

<strong>示例&amp;nbsp;1:</strong></p>

```
<strong>输入:</strong> [1,2,3]
<strong>输出:</strong> [1,2,4]
<strong>解释:</strong> 输入数组表示数字 123。
```

<p><strong>示例&amp;nbsp;2:</strong></p>

```
<strong>输入:</strong> [4,3,2,1]
<strong>输出:</strong> [4,3,2,2]
<strong>解释:</strong> 输入数组表示数字 4321。
```
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
var plusOne = function(digits) {
  const result = []
  let num
  const lastIncrease = digits.reduceRight((increase, curNum) => {
    num = curNum + increase
    result.unshift(num % 10)
    return num >= 10 ? 1 : 0
  }, 1)
  if (lastIncrease) {
    result.unshift(lastIncrease)
  }
  return result
}
plusOne([1,2,3,4,9])
```