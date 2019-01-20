### [771\. 宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)

难度 **简单**

 给定字符串`J` 代表石头中宝石的类型，和字符串 `S`代表你拥有的石头。 `S` 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

`J` 中的字母不重复，`J` 和 `S`中的所有字符都是字母。字母区分大小写，因此`"a"`和`"A"`是不同类型的石头。

**示例 1:**

**示例 2:**

**注意:**

```
输入: J = "aA", S = "aAAbbbb"
输出: 3
输入: J = "z", S = "ZZ"
输出: 0
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if(J.length === 0) {
      return 0;
  }
  return [...J].reduce((acc, v) => {
      const resArr = S.match(new RegExp(`${v}`,'g'));
      return acc += Array.isArray(resArr) ? resArr.length : 0
  }, 0)
};
```