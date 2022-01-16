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
// const mergeTwoLists = function (l1, l2) {
//   // const arr = [...l1]
//   const arr = Array.from(l1)
//   for (let i = 0; i < l2.length; i++) {

//     arr.push(l2[i])
//   }

//   return arr.sort((a, b) => { return a - b })
// }


const mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null
  if (!l1 && l2) return l2
  if (l1 && !l2) return l1
  let p = l1, q = l2, head = null, l3 = null
  while (p && q) {
    let t = p.val <= q.val ? p : q
    const node = new ListNode(t.val)
    if (!head) {
      head = node
      l3 = node
    } else {
      head.next = node
      head = head.next
    }
    if (t === p) {
      p = p.next
    } else {
      q = q.next
    }
  }
  if (p) {
    head.next = p
  }
  if (q) {
    head.next = q
  }
  return l3
};