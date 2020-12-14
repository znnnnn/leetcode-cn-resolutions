/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode *removeNthFromEnd(ListNode *head, int n) {
      ListNode dummy(0);
      dummy.next = head;
      ListNode *runner = dummy.next;
      ListNode *chaser = dummy.next;
      if (runner == nullptr) {
          return runner;
      }

      for (int i = 0; i < n; i++) {
          runner = runner->next;
      }
      while (runner != nullptr && runner->next != nullptr) {
          runner = runner->next;
          chaser = chaser->next;
      }
      std::cout << (*chaser).val << std::endl;
      if (chaser->next == nullptr) { return NULL; }
      else if (runner == nullptr) {
        *chaser = *chaser->next;
      }
      else {
        chaser->next = chaser->next->next;
      }

      return dummy.next;
  }
};