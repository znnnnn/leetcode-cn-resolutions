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
