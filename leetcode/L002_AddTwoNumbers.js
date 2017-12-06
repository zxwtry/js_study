/**
 * User:  zxwtry
 * File:  L002_AddTwoNumbers.js
 * Date:  2017/12/6
 * Time:  11:23
 */


//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * desc 按位相加
 * result AC 1562/1562 219ms
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var t1 = l1, t2 = l2;
    var head = new ListNode(0);
    var travel = head;
    while (t1 != null || t2 != null || carry != 0) {
        carry += t1 == null ? 0 : t1.val;
        carry += t2 == null ? 0 : t2.val;
        travel.next = new ListNode(carry % 10);
        travel = travel.next;
        carry = Math.floor(carry / 10);
        t1 = t1 == null ? null : t1.next;
        t2 = t2 == null ? null : t2.next;
    }
    return head.next;
};

var a2 = new ListNode(2);
var a4 = new ListNode(4);
var a3 = new ListNode(3);
a4.next = a3;
a2.next = a4;


var a5 = new ListNode(5);
var a6 = new ListNode(6);
var a4 = new ListNode(4);
a6.next = a4;
a5.next = a6;

console.log(addTwoNumbers(a2, a5));


