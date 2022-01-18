/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力破解  穷举所有结果  leetCode 超时
const maxSubArray = function (nums) {
  let result = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      result = Math.max(result, sum);
    }
  }

  return result;
};

// 贪心算法
const maxSubArray = function (nums) {
  let result = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(result, sum);

    if (sum < 0) sum = 0; // 小于0的情况清空
  }

  return result;
};

// 动态规划
const maxSubArray = function (nums) {
  let maxSum = nums[0]; // 最大和默认为 数组第一项
  let prev = 0; // 计算累加和

  nums.forEach(x => {
    prev = Math.max(prev + x, x);
    maxSum = Math.max(prev, maxSum);
  });

  return maxSum;
};
