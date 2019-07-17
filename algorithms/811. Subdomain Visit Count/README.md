<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-17 16:18:42
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-17 16:18:48
 -->
### [811\. 子域名访问计数Copy for MarkdownCopy for MarkdownCopy for MarkdownCopy for MarkdownCopy for Markdown](https://leetcode-cn.com/problems/subdomain-visit-count/)

Difficulty: **简单**

一个网站域名，如&amp;quot;discuss.leetcode.com&amp;quot;，包含了多个子域名。作为顶级域名，常用的有&amp;quot;com&amp;quot;，下一级则有&amp;quot;leetcode.com&amp;quot;，最低的一级为&amp;quot;discuss.leetcode.com&amp;quot;。当我们访问域名&amp;quot;discuss.leetcode.com&amp;quot;时，也同时访问了其父域名&amp;quot;leetcode.com&amp;quot;以及顶级域名&amp;nbsp;&amp;quot;com&amp;quot;。</p>

<p>给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如：&amp;quot;9001 discuss.leetcode.com&amp;quot;。</p>

<p>接下来会给出一组访问次数和域名组合的列表<code>cpdomains</code>&amp;nbsp;。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。</p>

```

<strong>示例 1:</strong>
<strong>输入:</strong> 
[&amp;quot;9001 discuss.leetcode.com&amp;quot;]
<strong>输出:</strong> 
[&amp;quot;9001 discuss.leetcode.com&amp;quot;, &amp;quot;9001 leetcode.com&amp;quot;, &amp;quot;9001 com&amp;quot;]
<strong>说明:</strong> 
例子中仅包含一个网站域名：&amp;quot;discuss.leetcode.com&amp;quot;。按照前文假设，子域名&amp;quot;leetcode.com&amp;quot;和&amp;quot;com&amp;quot;都会被访问，所以它们都被访问了9001次。
```

```

<strong>示例 2
输入:</strong> 
[&amp;quot;900 google.mail.com&amp;quot;, &amp;quot;50 yahoo.com&amp;quot;, &amp;quot;1 intel.mail.com&amp;quot;, &amp;quot;5 wiki.org&amp;quot;]
<strong>输出:</strong> 
[&amp;quot;901 mail.com&amp;quot;,&amp;quot;50 yahoo.com&amp;quot;,&amp;quot;900 google.mail.com&amp;quot;,&amp;quot;5 wiki.org&amp;quot;,&amp;quot;5 org&amp;quot;,&amp;quot;1 intel.mail.com&amp;quot;,&amp;quot;951 com&amp;quot;]
<strong>说明:</strong> 
按照假设，会访问&amp;quot;google.mail.com&amp;quot; 900次，&amp;quot;yahoo.com&amp;quot; 50次，&amp;quot;intel.mail.com&amp;quot; 1次，&amp;quot;wiki.org&amp;quot; 5次。
而对于父域名，会访问&amp;quot;mail.com&amp;quot; 900+1 = 901次，&amp;quot;com&amp;quot; 900 + 50 + 1 = 951次，和 &amp;quot;org&amp;quot; 5 次。
```

<p>

一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。

给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。

接下来会给出一组访问次数和域名组合的列表`cpdomains` 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。

```
示例 1:
输入: 
["9001 discuss.leetcode.com"]
输出: 
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
说明: 
例子中仅包含一个网站域名："discuss.leetcode.com"。按照前文假设，子域名"leetcode.com"和"com"都会被访问，所以它们都被访问了9001次。
```

```
示例 2
输入: 
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
输出: 
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
说明: 
按照假设，会访问"google.mail.com" 900次，"yahoo.com" 50次，"intel.mail.com" 1次，"wiki.org" 5次。
而对于父域名，会访问"mail.com" 900+1 = 901次，"com" 900 + 50 + 1 = 951次，和 "org" 5 次。
```

**注意事项：**

*   `cpdomains` 的长度小于 `100`。
*   每个域名的长度小于`100`。
*   每个域名地址包含一个或两个"."符号。
*   输入中任意一个域名的访问次数都小于`10000`。

<strong>注意事项：</strong></p>

<ul>
	<li>&amp;nbsp;<code>cpdomains</code>&amp;nbsp;的长度小于&amp;nbsp;<code>100</code>。</li>
	<li>每个域名的长度小于<code>100</code>。</li>
	<li>每个域名地址包含一个或两个&amp;quot;.&amp;quot;符号。</li>
	<li>输入中任意一个域名的访问次数都小于<code>10000</code>。</li>
</ul>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    return [...cpdomains
        .map(x => x.split(' '))// 将原始一维数组转化为数量域名的二维数组 [[9001 , discuss.leetcode.com]]
        .reduce((map, arrs) => {// 聚合统计迭代遍历每一个域名和次数
            const times = +arrs[0];//当前域名的访问次数  900 
            const domains = arrs[1].split('.'); //当前域名 "discuss.leetcode.com"
            while (domains.length > 0) {
                const domain = domains.join('.');
                map.set(domain, (map.get(domain) || 0) + times);
                domains.shift();// 移除最低级域名前缀
            }
            return map;// 用map统计域名次数
        }, new Map())]//将map转化成二维数组
        .map(item => item[1] + ' ' + item[0])// 二维数组映射成一维数组
​
};
```