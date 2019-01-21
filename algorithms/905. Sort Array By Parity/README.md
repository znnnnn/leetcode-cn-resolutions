### [905\. 按奇偶排序数组](https://leetcode-cn.com/problems/sort-array-by-parity/submissions/)

难度 **简单**

给定一个非负整数数组 `A`，返回一个由 `A` 的所有偶数元素组成的数组，后面跟 `A` 的所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

**示例：**

**提示：**

```
输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const uneven = []
    const even = []
    A.map(val => val%2 ? uneven.push(val): even.push(val))
    return even.concat(uneven)
};
```

Language: **Java**

```java
class Solution {
    public int[] sortArrayByParity(int[] A) {
        int[] result = new int[A.length];
        int start = 0;
        int end = A.length - 1;
        for (int i : A) {
            if (i % 2 == 0) {
                result[start++] = i;
            } else {
                result[end--] = i;
            }
        }
        return result;
    }
}
```