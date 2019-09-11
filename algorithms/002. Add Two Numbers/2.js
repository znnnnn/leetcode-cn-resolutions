/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carry = 0
  var arr = []
  while (l1 || l2) {
    var a = l1 ? l1.val : 0
    var b = l2 ? l2.val : 0
    arr.push((a + b + carry) % 10)
    carry = parseInt((a + b + carry) / 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  if (carry) arr.push(carry)
  var res = new ListNode(0)
  var tmp = (res.next = new ListNode(0))
  for (var i = 0; i < arr.length; i++) {
    tmp = tmp.next = new ListNode(0)
    tmp.val = arr[i]
  }
  return res.next.next
}
