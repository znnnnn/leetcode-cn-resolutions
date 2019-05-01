### [15\. 三数之和](https://leetcode-cn.com/problems/3sum/)

Difficulty: **中等**


给定一个包含 _n_ 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 _a，b，c ，_使得 _a + b + c =_ 0 ？找出所有满足条件且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    if (nums.length < 3) return res;
    let sort = nums.sort((a, b) => a - b);
    for (let i = 0; i < sort.length - 2; i += 1) {
        if (i > 0 && sort[i] === sort[i - 1]) continue;
        
        for (let j = i + 1, k = sort.length - 1; j < k;) {
            let sum = sort[i] + sort[j] + sort[k];
            if (sum === 0) {
                res.push([sort[i], sort[j], sort[k]]);
                j += 1;
                k -= 1;
                
                while (j < k && sort[j] === sort[j - 1]) j += 1;
                while (j < k && sort[k] === sort[k + 1]) k -= 1;
            }
            else if (sum > 0) k -= 1;
            else j += 1;
        }
    }
    return res;
};
```