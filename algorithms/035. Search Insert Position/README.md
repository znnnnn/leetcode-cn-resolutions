### [35\. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/submissions/)

难度: **简单**


给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例 1:**

```
输入: [1,3,5,6], 5
输出: 2
```

**示例 2:**

```
输入: [1,3,5,6], 2
输出: 1
```

**示例 3:**

```
输入: [1,3,5,6], 7
输出: 4
```

**示例 4:**

```
输入: [1,3,5,6], 0
输出: 0
```


#### Solution

做法大致分两种，做法一：遍历法，从左往右遍历整个数组，知道target比遍历的数组值小时，返回index（性能较差，如果target比数组里所有的值都大，则要遍历全部）
做法二 ：二分法（性能好）

Language: **JavaScript**

做法一：

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0
    for(;i<nums.length;i++) {
        if(target <= nums[i]) {
            return i
        }
    }
    return i
};
​
```

做法二：

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    const m = ~~((left + right) / 2);
    if (nums[m] > target) {
      right = m;
    } else if (nums[m] < target) {
      left = m + 1;
    } else {
      return m
    }
  }

  return left;
};
```

Language: **Java**

做法一：

```java
class Solution {
  public int searchInsert(int[] nums, int target) {
    for(int i = 0; i < nums.length;i++){
      if(nums[i] >= target){
        return i;
      }
    }
    return nums.length;
  }
}
```

做法二：

```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int low = 0, high = nums.length-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(nums[mid] == target) return mid;
            else if(nums[mid] > target) high = mid-1;
            else low = mid+1;
        }
        return low;
    }
}
```