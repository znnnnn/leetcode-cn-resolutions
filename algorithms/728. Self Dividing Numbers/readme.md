### [728\. 自除数Copy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/self-dividing-numbers/)

Difficulty: **简单**


_自除数 _是指可以被它包含的每一位数除尽的数。

例如，128 是一个自除数，因为 `128 % 1 == 0`，`128 % 2 == 0`，`128 % 8 == 0`。

还有，自除数不允许包含 0 。

给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

**示例 1：**

```
输入： 
上边界left = 1, 下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

**注意：**

*   每个输入参数的边界满足 `1 <= left <= right <= 10000`。

<em>自除数&amp;nbsp;</em>是指可以被它包含的每一位数除尽的数。</p>

<p>例如，128 是一个自除数，因为&amp;nbsp;<code>128 % 1 == 0</code>，<code>128 % 2 == 0</code>，<code>128 % 8 == 0</code>。</p>

<p>还有，自除数不允许包含 0 。</p>

<p>给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。</p>

<p><strong>示例 1：</strong></p>

```

<strong>输入：</strong> 
上边界left = 1, 下边界right = 22
<strong>输出：</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

<p><strong>注意：</strong></p>

<ul>
	<li>每个输入参数的边界满足&amp;nbsp;<code>1 &amp;lt;= left &amp;lt;= right &amp;lt;= 10000</code>。</li>
</ul>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
  
    for(; left <= right;left++) {
        let n = left
        let str = ""
​
        while(n > 0){
            d = n % 10
            n = (n - d)/10
            str = d + str
​
            if(left % d || d == 0) {break}    
            if(str == left) {result.push(str)}
        } 
    }
    return result
};
```