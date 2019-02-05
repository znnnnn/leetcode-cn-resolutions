### [78\. 子集](https://leetcode-cn.com/problems/subsets/comments/)

难度: **中等**


给定一组**不含重复元素**的整数数组 _nums_，返回该数组所有可能的子集（幂集）。

**说明：**解集不能包含重复的子集。

**示例:**

```
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
​
/*
 [
   [],
   [],
   []
 ]
​
 slice不修改数组，而是返回一个新数组。
 每一次循环，拷贝上一次的结果，增添数字
​
 [1]
 [1,2]
 [1,2,3]
*/
​
var subsets = function (nums) {
  var lists = [
    []
  ];
​
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0, size = lists.length; j < size; j++) {
      var list = lists[j].slice();
​
      list.push(nums[i]);
      lists.push(list);
    }
  }
  return lists;
};
```

Language: **Java**

```java
import java.util.*;

class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> list = new ArrayList<Integer>();
        if (nums == null || nums.length == 0) return res;
        subsetsRecur(res, list, nums, 0);
        return res;
    }

    private void subsetsRecur(List<List<Integer>> res, List<Integer> list, int[] nums, int j) {
        res.add(new ArrayList<Integer>(list));
        for (int i = j; i < nums.length; i++) {
            list.add(nums[i]);
            subsetsRecur(res, list, nums, i + 1);
            list.remove(list.size() - 1);
        }
    }
}
```