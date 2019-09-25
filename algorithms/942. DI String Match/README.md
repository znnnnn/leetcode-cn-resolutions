### [942\. 增减字符串匹配](https://leetcode-cn.com/problems/di-string-match/)

Difficulty: **简单**

给定只含&amp;nbsp;<code>&amp;quot;I&amp;quot;</code>（增大）或 <code>&amp;quot;D&amp;quot;</code>（减小）的字符串&amp;nbsp;<code>S</code>&amp;nbsp;，令&amp;nbsp;<code>N = S.length</code>。</p>

<p>返回&amp;nbsp;<code>[0, 1, ..., N]</code>&amp;nbsp;的任意排列&amp;nbsp;<code>A</code>&amp;nbsp;使得对于所有&amp;nbsp;<code>i = 0,&amp;nbsp;..., N-1</code>，都有：</p>

<ul>
	<li>如果&amp;nbsp;<code>S[i] == &amp;quot;I&amp;quot;</code>，那么&amp;nbsp;<code>A[i] &amp;lt; A[i+1]</code>

给定只含 `"I"`（增大）或 `"D"`（减小）的字符串 `S` ，令 `N = S.length`。

返回 `[0, 1, ..., N]` 的任意排列 `A` 使得对于所有 `i = 0, ..., N-1`，都有：

*   如果 `S[i] == "I"`，那么 `A[i] < A[i+1]`
*   如果 `S[i] == "D"`，那么 `A[i] > A[i+1]`

**示例 1：**

```
输出："IDID"
输出：[0,4,1,3,2]
```

**示例 2：**

```
输出："III"
输出：[0,1,2,3]
```

**示例 3：**

```
输出："DDI"
输出：[3,2,0,1]
```

**提示：**

1.  `1 <= S.length <= 1000`
2.  `S` 只包含字符 `"I"` 或 `"D"`。

</li>
	<li>如果&amp;nbsp;<code>S[i] == &amp;quot;D&amp;quot;</code>，那么&amp;nbsp;<code>A[i] &amp;gt; A[i+1]</code></li>
</ul>

<p>&amp;nbsp;</p>

<p><strong>示例 1：</strong></p>

```
<strong>输出：</strong>&amp;quot;IDID&amp;quot;
<strong>输出：</strong>[0,4,1,3,2]
```

<p><strong>示例 2：</strong></p>

```
<strong>输出：</strong>&amp;quot;III&amp;quot;
<strong>输出：</strong>[0,1,2,3]
```

<p><strong>示例 3：</strong></p>

```
<strong>输出：</strong>&amp;quot;DDI&amp;quot;
<strong>输出：</strong>[3,2,0,1]
```

<p>&amp;nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li><code>1 &amp;lt;= S.length &amp;lt;= 1000</code></li>
	<li><code>S</code> 只包含字符&amp;nbsp;<code>&amp;quot;I&amp;quot;</code>&amp;nbsp;或&amp;nbsp;<code>&amp;quot;D&amp;quot;</code>。</li>
</ol>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let a = 0,b = S.length;
  return (S+S[S.length - 1]).split('').map((x) => x=='I'?a++:b--);
};
```