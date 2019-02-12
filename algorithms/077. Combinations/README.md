### [77\. 组合](https://leetcode-cn.com/problems/combinations/submissions/)

难度: **中等**

给定两个整数 _n_ 和 _k_，返回 1 ... _n_ 中所有可能的 _k_ 个数的组合。

**示例:**

```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];
  var helper = function(n, k, index, temp) {
    if (k === 0) {
      res.push(temp.slice());
      return;
    }
    for (var i = index; i <= n; i++) {
      temp.push(i);
      helper(n, k - 1, i + 1, temp);
      temp.pop();
    }
  };
  helper(n, k, 1, []);
  return res;
};
```

Language: **Java**

```java
class Solution {
    List<List<Integer>> res = new ArrayList<>();
    int n;
​
    public List<List<Integer>> combine(int n, int k) {
        this.n = n;
        backtrack(new ArrayList<>(), 0, k);
        return res;
    }
​
    private void backtrack(ArrayList<Integer> path, int start, int k) {
        if (k == 0) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < n; i++) {
            path.add(i + 1);
            backtrack(path, i + 1, k - 1);
            path.remove(path.size() - 1);
        }
    }
}
        buffer.push(arr[index]);
```
