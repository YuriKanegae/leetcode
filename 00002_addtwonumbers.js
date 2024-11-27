/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let root = new ListNode(0);
    let head = root;

    let rest = 0;
    while(l1 || l2) {
        const normalized_n1 = l1?.val ?? 0;
        const normalized_n2 = l2?.val ?? 0;
        const sum           = normalized_n1 + normalized_n2 + rest;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

        head.next = new ListNode(sum % 10);
        head      = head.next;
        rest      = parseInt(sum/10);
    }

    if(rest) 
        head.next = new ListNode(rest);

    return root.next;
};