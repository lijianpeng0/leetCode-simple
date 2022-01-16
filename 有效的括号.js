/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 新建哈希表匹配
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const arr = []; //  新建一个栈
  for (let i = 0; i < s.length; i++) {
    arr.push(s.substr(i, 1)); // 入栈

    if (obj[arr[arr.length - 2]] === arr[arr.length - 1]) {
      // 判断是否相等
      // 这样判断是因为入栈过程中 必定会有相同的，碰到相同的进行出栈
      arr.pop(); // 出栈
      arr.pop();
    }
  }

  if (arr.length > 0) return false;
  return true;
};

console.log(isValid("{{{[[[()]]]}}}"));
