### [292\. Nim 游戏](https://leetcode-cn.com/problems/nim-game/)

Difficulty: **简单**

你和你的朋友，两个人一起玩&amp;nbsp;<a href=&quot;https://baike.baidu.com/item/Nim游戏/6737105&quot; target=&quot;_blank&quot;>Nim 游戏</a>：桌子上有一堆石头，每次你们轮流拿掉&amp;nbsp;1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。</p>

<p>你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。</p>

<p>

你和你的朋友，两个人一起玩 ：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

**示例:**

```
输入: 4
输出: false 
解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
```

<strong>示例:</strong></p>

```
<strong>输入:</strong> <code>4</code>
<strong>输出:</strong> false 
<strong>解释: </strong>如果堆中有 4 块石头，那么你永远不会赢得比赛；
&amp;nbsp;    因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
```
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0
}
```