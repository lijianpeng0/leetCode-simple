/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// const climbStairs = function (n) {
//   let result = [1, 1];
//   if (n < 2) return 1;
//   for (let i = 2; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }
//   return result[n];
// };
const climbStairs = function (n) {
  if (n < 2) return 1;
  let after2Sum = 1; // 为 0 的时候
  let after1Sum = 1; // 为 1 的时候
  let result = 2; // 为 2 的时候
  for (let i = 2; i < n; i++) {
    // 依次往前进一位
    after2Sum = after1Sum;
    after1Sum = result;
    result = after1Sum + after2Sum;
  }
  return result;
};

console.log(climbStairs(2));
// 1  1
// 2  1+1  2
// 3  1+1+1 1+2 2+1
// 4  1+1+1+1 1+1+2 1+2+1 2+1+1 2+2
// 5  1+1+1+1+1 1+1+1+2 1+1+2+1 1+2+1+1 2+1+1+1 1+2+2 2+1+2 2+2+1

// f(n) = f(n-1) + f(n-2) 爬到第n阶楼梯的总方案为 到 n-1 的方案数 + n-2 的方案数
