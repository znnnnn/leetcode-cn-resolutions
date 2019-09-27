### [476\. 数字的补数](https://leetcode-cn.com/problems/number-complement/)

Difficulty: **简单**

给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。</p>

<p>

给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

**注意:**

1.  给定的整数保证在32位带符号整数的范围内。
2.  你可以假定二进制数不包含前导零位。

**示例 1:**

```
输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
```

**示例 2:**

```
输入: 1
输出: 0
解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
```

<strong>注意:</strong></p>

<ol>
	<li>给定的整数保证在32位带符号整数的范围内。</li>
	<li>你可以假定二进制数不包含前导零位。</li>
</ol>

<p><strong>示例 1:</strong></p>

```

<strong>输入:</strong> 5
<strong>输出:</strong> 2
<strong>解释:</strong> 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
```

<p><strong>示例 2:</strong></p>

```

<strong>输入:</strong> 1
<strong>输出:</strong> 0
<strong>解释:</strong> 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
```
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​var findComplement = function(num) {
  let temp = num
  let c = 0
  while (temp > 0) {
    temp >>= 1
    c = (c << 1) + 1
  }
  return num ^ c
}
```