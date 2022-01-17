/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let head = new ListNode(null); // 创建头节点 并用作指针
  let p3 = head; // 用于保存合并的链表 头结点为 null 需要返回 p3.next

  // 遍历链表，当有一个链表为空时跳出循环
  while (p1 && p2) {
    // 判断当前循环中值较小的节点
    if (p1.val <= p2.val) {
      // 头节点指向较小的节点
      head.next = p1;
      // 头结点后移一位
      head = head.next;
      // 较小节点的列表后移一位
      p1 = p1.next;
    } else {
      // 头节点指向较小的节点
      head.next = p2;
      // 头结点后移一位
      head = head.next;
      // 较小节点的列表后移一位
      p2 = p2.next;
    }
  }
  // 判断结束的链表是哪一个 结束的链表当前为null
  // p1 结束 链接到 p2
  // p2 结束 链接到 p1
  head.next = p1 ? p1 : p2;

  return p3.next;
};
