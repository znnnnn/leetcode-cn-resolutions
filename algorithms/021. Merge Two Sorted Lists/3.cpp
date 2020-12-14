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
        ListNode *runner = &dummy;
        ListNode *chaser = &dummy;
        if (runner->next == nullptr) {
            return runner;
        }

        for (int i = 0; i <= n; i++) {
            runner = runner->next;
        }
        while (runner != nullptr) {
            runner = runner->next;
            chaser = chaser->next;
        }
        chaser->next = chaser->next->next;

        return dummy.next;
    }
};