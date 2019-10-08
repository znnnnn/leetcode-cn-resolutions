### [237\. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

Difficulty: **简单**

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。</p>

<p>现有一个链表 --&amp;nbsp;head =&amp;nbsp;[4,5,1,9]，它可以表示为:</p>

<p>

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png)

**示例 1:**

```
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2:**

```
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

**说明:**

*   链表至少包含两个节点。
*   链表中所有节点的值都是唯一的。
*   给定的节点为非末尾节点并且一定是链表中的一个有效节点。
*   不要从你的函数中返回任何结果。

<img alt=&quot;&quot; src=&quot;https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png&quot; style=&quot;height: 49px; width: 300px;&quot;></p>

<p>&amp;nbsp;</p>

<p><strong>示例 1:</strong></p>

```
<strong>输入:</strong> head = [4,5,1,9], node = 5
<strong>输出:</strong> [4,1,9]
<strong>解释: </strong>给定你链表中值为&amp;nbsp;5&amp;nbsp;的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&amp;gt; 1 -&amp;gt; 9.
```

<p><strong>示例 2:</strong></p>

```
<strong>输入:</strong> head = [4,5,1,9], node = 1
<strong>输出:</strong> [4,5,9]
<strong>解释: </strong>给定你链表中值为&amp;nbsp;1&amp;nbsp;的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&amp;gt; 5 -&amp;gt; 9.
```

<p>&amp;nbsp;</p>

<p><strong>说明:</strong></p>

<ul>
	<li>链表至少包含两个节点。</li>
	<li>链表中所有节点的值都是唯一的。</li>
	<li>给定的节点为非末尾节点并且一定是链表中的一个有效节点。</li>
	<li>不要从你的函数中返回任何结果。</li>
</ul>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
​/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```