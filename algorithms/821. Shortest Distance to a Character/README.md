### [821\. 字符的最短距离](https://leetcode-cn.com/problems/shortest-distance-to-a-character/)

Difficulty: **简单**


给定一个字符串 `S` 和一个字符 `C`。返回一个代表字符串 `S` 中每个字符到字符串 `S` 中的字符 `C` 的最短距离的数组。

**示例 1:**

```
输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```

**说明:**

1.  字符串 `S` 的长度范围为 `[1, 10000]`。
2.  `C` 是一个单字符，且保证是字符串 `S` 里的字符。
3.  `S` 和 `C` 中的所有字母均为小写字母。


#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const a = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) a.push(i)
  }
  const b = []
  for (let i = 0; i < S.length; i++) {
    b[i] = 9999
    for (let j = 0; j < a.length; j++) {
      if (Math.abs(i - a[j]) < b[i]) b[i] = Math.abs(i - a[j])
    }
  }
  return b
}
```