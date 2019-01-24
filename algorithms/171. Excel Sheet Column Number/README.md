### [171\. Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/submissions/)

难度 **简单**

给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

**示例 1:**

**示例 2:**

**示例 3:**

**致谢：**
特别感谢  添加此问题并创建所有测试用例。

```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
输入: "A"
输出: 1
输入: "AB"
输出: 28
输入: "ZY"
输出: 701
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    for (let e of s) {
        res = res * 26 +  e.charCodeAt() - 64;
    }
    return res;
};
```