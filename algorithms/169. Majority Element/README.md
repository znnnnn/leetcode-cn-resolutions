### [169\. 求众数](https://leetcode-cn.com/problems/majority-element/)

难度: **简单**


给定一个大小为 _n_ 的数组，找到其中的众数。众数是指在数组中出现次数**大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

**示例 1:**

```
输入: [3,2,3]
输出: 3
```

**示例 2:**

```
输入: [2,2,1,1,1,2,2]
输出: 2
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
      if (count === 0) {
          candidate = num;
      }
      count = candidate === num ? count + 1 : count - 1;
  }
  return candidate;
};
```

Language: **Java**

```java
class Solution {
    public int majorityElement(int[] nums) {
    int count = 1;
    int maj = nums[0];
    for (int i = 1; i < nums.length; i++) {
      if (maj == nums[i])
        count++;
      else {
        count--;
        if (count == 0) {
          maj = nums[i + 1];
        }
      }
    }
    return maj;
  }
}
```