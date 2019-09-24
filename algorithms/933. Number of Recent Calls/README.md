### [933\. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)

Difficulty: **简单**

写一个&amp;nbsp;<code>RecentCounter</code>&amp;nbsp;类来计算最近的请求。</p>

<p>它只有一个方法：<code>ping(int t)</code>，其中&amp;nbsp;<code>t</code>&amp;nbsp;代表以毫秒为单位的某个时间。</p>

<p>返回从 3000 毫秒前到现在的&amp;nbsp;<code>ping</code>&amp;nbsp;数。</p>

<p>任何处于&amp;nbsp;<code>[t - 3000, t]</code>&amp;nbsp;时间范围之内的 <code>ping</code>&amp;nbsp;都将会被计算在内，包括当前（指 <code>t</code>&amp;nbsp;时刻）的 <code>ping</code>。</p>

<p>保证每次对 <code>ping</code> 的调用都使用比之前更大的 <code>t</code> 值。</p>

<p>&amp;nbsp;</p>

<p>

写一个 `RecentCounter` 类来计算最近的请求。

它只有一个方法：`ping(int t)`，其中 `t` 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 `ping` 数。

任何处于 `[t - 3000, t]` 时间范围之内的 `ping` 都将会被计算在内，包括当前（指 `t` 时刻）的 `ping`。

保证每次对 `ping` 的调用都使用比之前更大的 `t` 值。

**示例：**

```
输入：inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
输出：[null,1,2,3,3]
```

**提示：**

1.  每个测试用例最多调用 `10000` 次 `ping`。
2.  每个测试用例会使用严格递增的 `t` 值来调用 `ping`。
3.  每次调用 `ping` 都有 `1 <= t <= 10^9`。

<strong>示例：</strong></p>

```
<strong>输入：</strong>inputs = [&amp;quot;RecentCounter&amp;quot;,&amp;quot;ping&amp;quot;,&amp;quot;ping&amp;quot;,&amp;quot;ping&amp;quot;,&amp;quot;ping&amp;quot;], inputs = [[],[1],[100],[3001],[3002]]
<strong>输出：</strong>[null,1,2,3,3]
```

<p>&amp;nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li>每个测试用例最多调用&amp;nbsp;<code>10000</code>&amp;nbsp;次&amp;nbsp;<code>ping</code>。</li>
	<li>每个测试用例会使用严格递增的 <code>t</code> 值来调用&amp;nbsp;<code>ping</code>。</li>
	<li>每次调用 <code>ping</code>&amp;nbsp;都有&amp;nbsp;<code>1 &amp;lt;= t &amp;lt;= 10^9</code>。</li>
</ol>

<p>&amp;nbsp;</p>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​var RecentCounter = function() {
  this.result = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.result.push(t)
    while (this.result[0] < (t-3000)) {
      this.result.shift()
    }
    return this.result.length
};
```