### [39\. 组合总和Copy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/combination-sum/)

Difficulty: **中等**

给定一个<strong>无重复元素</strong>的数组&amp;nbsp;<code>candidates</code>&amp;nbsp;和一个目标数&amp;nbsp;<code>target</code>&amp;nbsp;，找出&amp;nbsp;<code>candidates</code>&amp;nbsp;中所有可以使数字和为&amp;nbsp;<code>target</code>&amp;nbsp;的组合。</p>

<p>

给定一个**无重复元素**的数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的数字可以无限制重复被选取。

**说明：**

*   所有数字（包括 `target`）都是正整数。
*   解集不能包含重复的组合。 

**示例 1:**

```
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
```

**示例 2:**

```
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

<code>candidates</code>&amp;nbsp;中的数字可以无限制重复被选取。</p>

<p><strong>说明：</strong></p>

<ul>
	<li>所有数字（包括&amp;nbsp;<code>target</code>）都是正整数。</li>
	<li>解集不能包含重复的组合。&amp;nbsp;</li>
</ul>

<p><strong>示例&amp;nbsp;1:</strong></p>

```
<strong>输入:</strong> candidates = <code>[2,3,6,7], </code>target = <code>7</code>,
<strong>所求解集为:</strong>
[
  [7],
  [2,2,3]
]
```

<p><strong>示例&amp;nbsp;2:</strong></p>

```
<strong>输入:</strong> candidates = [2,3,5]<code>, </code>target = 8,
<strong>所求解集为:</strong>
[
&amp;nbsp; [2,2,2,2],
&amp;nbsp; [2,3,3],
&amp;nbsp; [3,5]
]
```
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  var item = [],
    path = [];
  get_combin(candidates, target, 0, item, path);
​
  function get_combin(candidates, target, it, item, path) {
    if (target < 0)
      // 如果大于target 直接返回不继续搜索
      return;
    if (target == 0) {
      // 若得到路径，插入到item，不用清空path。因为需要继续搜索其余可能性
      path = path.slice()
      item.push(path);
      return
    }
    for (var i = it; i < candidates.length; i++) {
      path.push(candidates[i]);
      get_combin(candidates, target - candidates[i], i, item, path)
      // 无论是该路径大于target还是等于target，都需要对其删除最后一个元素，进行其余支路的搜索
      path.pop()
    }
  }
  return item
};
```