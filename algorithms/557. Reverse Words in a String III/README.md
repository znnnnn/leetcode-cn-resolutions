### [557\. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

Difficulty: **简单**

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。</p>

<p>

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

**示例 1:**

```
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
```

********注意：********在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

<strong>示例&amp;nbsp;1:</strong></p>

```

输入: &amp;quot;Let&amp;#39;s take LeetCode contest&amp;quot;
输出: &amp;quot;s&amp;#39;teL ekat edoCteeL tsetnoc&amp;quot;<strong><strong><strong>&amp;nbsp;</strong></strong></strong>
```

<p><strong><strong><strong><strong>注意：</strong></strong></strong></strong>在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。</p>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(' ')
  return words.map(item => item.split('').reverse().join('')).join(' ')
};
```