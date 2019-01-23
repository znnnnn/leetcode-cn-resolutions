### [922\. 按奇偶排序数组 II](https://leetcode-cn.com/problems/sort-array-by-parity-ii/submissions/)

难度 **简单**

给定一个非负整数数组 `A`， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 `A[i]` 为奇数时，`i` 也是奇数；当 `A[i]` 为偶数时， `i` 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

**示例：**

**提示：**

```
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr=Array(A.length);
  let even=0;
  let odd=1;
  A.forEach(a=>{
      if(a%2==0){
          arr[even]=a;
          even+=2;
      }else{
          arr[odd]=a;
          odd+=2;
      }
  })
  return arr;
};
```

Language: **Java**

```java
class Solution {
    public int[] sortArrayByParityII(int[] A) {
        int i = 0;
        int j = 1;
        int[] b = new int[A.length];
        for(int n : A){
            if(n % 2 == 0){
                b[i] = n;
                i += 2;
            }else{
                b[j] = n;
                j += 2;
            }
        }
        return b;
    }
}
```