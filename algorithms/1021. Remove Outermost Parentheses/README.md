<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-20 20:20:09
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-20 20:20:09
 -->
### [1021\. 删除最外层的括号Copy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/remove-outermost-parentheses/)

Difficulty: **简单**

有效括号字符串为空&amp;nbsp;<code>(&amp;quot;&amp;quot;)</code>、<code>&amp;quot;(&amp;quot; + A + &amp;quot;)&amp;quot;</code>&amp;nbsp;或&amp;nbsp;<code>A + B</code>，其中&amp;nbsp;<code>A</code> 和&amp;nbsp;<code>B</code>&amp;nbsp;都是有效的括号字符串，<code>+</code>&amp;nbsp;代表字符串的连接。例如，<code>&amp;quot;&amp;quot;</code>，<code>&amp;quot;()&amp;quot;</code>，<code>&amp;quot;(())()&amp;quot;</code>&amp;nbsp;和&amp;nbsp;<code>&amp;quot;(()(()))&amp;quot;</code>&amp;nbsp;都是有效的括号字符串。</p>

<p>如果有效字符串&amp;nbsp;<code>S</code>&amp;nbsp;非空，且不存在将其拆分为&amp;nbsp;<code>S = A+B</code>&amp;nbsp;的方法，我们称其为<strong>原语（primitive）</strong>，其中&amp;nbsp;<code>A</code> 和&amp;nbsp;<code>B</code>&amp;nbsp;都是非空有效括号字符串。</p>

<p>给出一个非空有效字符串&amp;nbsp;<code>S</code>，考虑将其进行原语化分解，使得：<code>S = P_1 + P_2 + ... + P_k</code>，其中&amp;nbsp;<code>P_i</code>&amp;nbsp;是有效括号字符串原语。</p>

<p>对&amp;nbsp;<code>S</code>&amp;nbsp;进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 <code>S</code>&amp;nbsp;。</p>

<p>&amp;nbsp;</p>

<p>

有效括号字符串为空 `("")`、`"(" + A + ")"` 或 `A + B`，其中 `A` 和 `B` 都是有效的括号字符串，`+` 代表字符串的连接。例如，`""`，`"()"`，`"(())()"` 和 `"(()(()))"` 都是有效的括号字符串。

如果有效字符串 `S` 非空，且不存在将其拆分为 `S = A+B` 的方法，我们称其为**原语（primitive）**，其中 `A` 和 `B` 都是非空有效括号字符串。

给出一个非空有效字符串 `S`，考虑将其进行原语化分解，使得：`S = P_1 + P_2 + ... + P_k`，其中 `P_i` 是有效括号字符串原语。

对 `S` 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 `S` 。

**示例 1：**

```
输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。```

**示例 2：**

```
输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
```

**示例 3：**

```
输入："()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。
```

**提示：**

1.  `S.length <= 10000`
2.  `S[i]` 为 `"("` 或 `")"`
3.  `S` 是一个有效括号字符串

<strong>示例 1：</strong></p>

```
<strong>输入：</strong>&amp;quot;(()())(())&amp;quot;
<strong>输出：</strong>&amp;quot;()()()&amp;quot;
<strong>解释：
</strong>输入字符串为 &amp;quot;(()())(())&amp;quot;，原语化分解得到 &amp;quot;(()())&amp;quot; + &amp;quot;(())&amp;quot;，
删除每个部分中的最外层括号后得到 &amp;quot;()()&amp;quot; + &amp;quot;()&amp;quot; = &amp;quot;()()()&amp;quot;。```

<p><strong>示例 2：</strong></p>

```
<strong>输入：</strong>&amp;quot;(()())(())(()(()))&amp;quot;
<strong>输出：</strong>&amp;quot;()()()()(())&amp;quot;
<strong>解释：</strong>
输入字符串为 &amp;quot;(()())(())(()(()))&amp;quot;，原语化分解得到 &amp;quot;(()())&amp;quot; + &amp;quot;(())&amp;quot; + &amp;quot;(()(()))&amp;quot;，
删除每隔部分中的最外层括号后得到 &amp;quot;()()&amp;quot; + &amp;quot;()&amp;quot; + &amp;quot;()(())&amp;quot; = &amp;quot;()()()()(())&amp;quot;。
```

<p><strong>示例 3：</strong></p>

```
<strong>输入：</strong>&amp;quot;()()&amp;quot;
<strong>输出：</strong>&amp;quot;&amp;quot;
<strong>解释：</strong>
输入字符串为 &amp;quot;()()&amp;quot;，原语化分解得到 &amp;quot;()&amp;quot; + &amp;quot;()&amp;quot;，
删除每个部分中的最外层括号后得到 &amp;quot;&amp;quot; + &amp;quot;&amp;quot; = &amp;quot;&amp;quot;。
```

<p>&amp;nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li><code>S.length &amp;lt;= 10000</code></li>
	<li><code>S[i]</code> 为&amp;nbsp;<code>&amp;quot;(&amp;quot;</code> 或&amp;nbsp;<code>&amp;quot;)&amp;quot;</code></li>
	<li><code>S</code> 是一个有效括号字符串</li>
</ol>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    //去除最外层括号，有效括号字符串左右单括号数相等
    var res = '';
    var count = 0;
    var start = 0;
    for(var i=0;i<S.length;i++){
        if('(' === S[i]){
            count++
        }else{
            count--;
        }
        if(count === 0){
            res += S.slice(start+1, i);
            start = i + 1;
        }
    }
    return res;
};
```