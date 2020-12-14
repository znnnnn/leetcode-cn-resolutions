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
    ListNode *swapPairs(ListNode *head) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* curr = dummy;
        while (curr->next != nullptr && curr->next->next != nullptr) {
            ListNode * first = curr->next;
            ListNode * second = first->next;
            first->next = first->next->next;
            curr->next = second;
            second->next = first;
            curr = curr->next->next;
        }
        return dummy->next;
    }
};