### [961\. 重复 N 次的元素](https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/comments/)

难度 **简单**

在大小为 `2N` 的数组 `A` 中有 `N+1` 个不同的元素，其中有一个元素重复了 `N` 次。

返回重复了 `N` 次的那个元素。

**示例 1：**

**示例 2：**

**示例 3：**

**提示：**

```
输入：[1,2,3,3]
输出：3
输入：[2,1,2,5,3,2]
输出：2
输入：[5,1,5,2,5,3,5,4]
输出：5
```

#### Solution

Language: **Javascript**

```javascript
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {

    let dic = {}

    for(let i of A){

        if(i in dic) return i

        dic[i] = 0
    }
};
```

Language: **Java**

```java
class Solution {
    public int repeatedNTimes(int[] A) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int x : A){
            int count = map.getOrDefault(x, 0) + 1;
            map.put(x, count);
            if(count > 1){
                return x;
            }
        }
        return 0;
    }
}
```