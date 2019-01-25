### [461\. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/submissions/)

难度 **简单**

两个整数之间的指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 `x` 和 `y`，计算它们之间的汉明距离。

**注意：**
0 ≤ `x`, `y` < 2<sup>31</sup>.

**示例:**

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

**思路**

在字符串中，两个等长字符串之间的汉明距离是两个字符串对应位置的不同字符的个数。
在整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

所以按位异或计算 如：x是二进制数0101 y是二进制数1011 则结果为x＾y=1110,0＾1=1,0＾0=0,1＾1=0,1＾0=1!
得出异或的结果，1的个数便是答案。

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};
```

Language: **Java**

```Java
class Solution {
    public int hammingDistance(int x, int y) {
        return Integer.toBinaryString(x^y).replaceAll("0","").length();
    }
}
```

Language: **Python**

```python
class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return bin(x ^ y).count('1')
```