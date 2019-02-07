### [136\. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/submissions/)

难度: **简单**

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1:**

```
输入: [2,2,1]
输出: 1
```

**示例  2:**

```
输入: [4,1,2,1,2]
输出: 4
```

#### Solution

这题异或是最优解，两数则返回 0，所以有相同的数都会抵消，只剩下唯一的那个数字。

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  a = 0;
  for (num of nums) {
    a = a ^ num;
  }
  return a;
};
```

Language: **Python**

```python
class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for num in nums:
            a = a ^ num
        return a
```

Language: **Java**

```java
class Solution {
  public int singleNumber(int[] nums) {
      int result = 0;
      for(int i = 0;i < nums.length;i++){ //取异或，异或同一个数两次，原数不变
          result ^= nums[i];
      }
      return result;
  }
​
```
