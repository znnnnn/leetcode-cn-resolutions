### [9\. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

难度 **简单**

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

**示例 2:**

**示例 3:**

**进阶:**

你能不将整数转为字符串来解决这个问题吗？

```
输入: 121
输出: true
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x%10 === 0 && x !== 0 )) return false;
    var t = x;
    x = Math.abs(x);
    var p = 0;
    while (x) {
        p = p * 10 + x % 10;
        x = Math.floor(x / 10);
    }
​
    return t === p;
};
```