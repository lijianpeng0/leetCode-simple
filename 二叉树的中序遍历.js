/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
const inorderTraversal = function (root) {
  const res = [];
  const inorder = root => {
    // 空节点的情况下 直接return
    if (!root) {
      return;
    }
    // 不是空节点 将控制权交给 左节点
    inorder(root.left);
    // 左节点为空 push 当前节点值
    res.push(root.val);
    // 再将控制权交给右节点
    inorder(root.right);
  };

  inorder(root);
  return res;
};

// 迭代
const inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  // 当前节点不是空节点 或者 栈中有节点
  while (root || stack.length) {
    // 如果当前节点不是空节点 先将当前节点存入栈中 再继续往左节点找
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 如果当前节点是空节点 从栈中取出一个节点(此节点的左节点是空节点)
    root = stack.pop();
    // 保存当前节点值
    res.push(root.val);
    // 将控制权交由此节点的右节点
    root = root.right;
  }

  return res;
};
