### [88\. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/submissions/)

难度: **简单**

给定两个有序整数数组  *nums1* 和 _nums2_，将 _nums2_ 合并到  *nums1 *中*，*使得  *num1* 成为一个有序数组。

**说明:**

- 初始化  *nums1* 和 _nums2_ 的元素数量分别为  *m* 和 _n_。
- 你可以假设  *nums1 *有足够的空间（空间大小大于或等于  *m + n*）来保存 _nums2_ 中的元素。

**示例:**

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};
​
​
// 这个方法应该也是可以的，本地测试通过，但是leetcode用力测试不通过，很奇怪
// var merge = function (nums1, m, nums2, n) {
//   nums1.push(...nums2);
//   nums1 = nums1.sort((a, b) => a - b).filter(function (x) {
//     return x % 2 !== 0;
//   })
// };
        } else {
```

Language: **Java**

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for(int i=0;i<n;i++){
            nums1[m+i]=nums2[i];
        }
     Arrays.sort(nums1);
     }
}
```
