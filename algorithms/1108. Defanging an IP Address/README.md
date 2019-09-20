### [1108\. IP 地址无效化](https://leetcode-cn.com/problems/defanging-an-ip-address/)

Difficulty: **简单**

给你一个有效的 <a href=&quot;https://baike.baidu.com/item/IPv4&quot; target=&quot;_blank&quot;>IPv4</a> 地址&amp;nbsp;<code>address</code>，返回这个 IP 地址的无效化版本。</p>

<p>所谓无效化&amp;nbsp;IP 地址，其实就是用&amp;nbsp;<code>&amp;quot;[.]&amp;quot;</code>&amp;nbsp;代替了每个 <code>&amp;quot;.&amp;quot;</code>。</p>

<p>&amp;nbsp;</p>

<p>

给你一个有效的 地址 `address`，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 `"[.]"` 代替了每个 `"."`。

**示例 1：**

```
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

**示例 2：**

```
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

**提示：**

*   给出的 `address` 是一个有效的 IPv4 地址

<strong>示例 1：</strong></p>

```
<strong>输入：</strong>address = &amp;quot;1.1.1.1&amp;quot;
<strong>输出：</strong>&amp;quot;1[.]1[.]1[.]1&amp;quot;
```

<p><strong>示例 2：</strong></p>

```
<strong>输入：</strong>address = &amp;quot;255.100.50.0&amp;quot;
<strong>输出：</strong>&amp;quot;255[.]100[.]50[.]0&amp;quot;
```

<p>&amp;nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>给出的&amp;nbsp;<code>address</code>&amp;nbsp;是一个有效的 IPv4 地址</li>
</ul>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};
```