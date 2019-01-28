### [2\. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/comments/)

难度 **中等**

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curEle = result = new ListNode(0)
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = sum > 9 ? 1 : 0
        curEle.next = new ListNode((sum) % 10)
        curEle = curEle.next
    }
    return result.next
};
```

```javascript
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var arr = [];
    while(l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        arr.push((a+b+carry)%10);
        carry = parseInt((a+b+carry)/10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(carry) arr.push(carry);
    var res = new ListNode(0);
    var tmp = res.next = new ListNode(0);
    for(var i = 0; i<arr.length; i++) {
        tmp = tmp.next = new ListNode(0);
        tmp.val = arr[i];
    }
    return res.next.next;
};
```

```Java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode preHead = new ListNode(0);
    ListNode runner = preHead;
    int carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        if (l1 != null) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            carry += l2.val;
            l2 = l2.next;
        }
        runner.next = new ListNode(carry % 10);
        runner = runner.next;
        carry /= 10;
    }
    return preHead.next;
}
```