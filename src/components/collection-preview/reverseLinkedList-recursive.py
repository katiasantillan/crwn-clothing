# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def reverseList(self, head: ListNode) -> ListNode:
        newHead = self.reverseLinkedList(head)
        return newHead
    
    def reverseLinkedList(self, node):
        if node is None or node.next is None:
            return node
        
        newHead = self.reverseLinkedList(node.next)
        node.next.next = node
        node.next = None
        
        return newHead
            