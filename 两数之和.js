/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力解法 双重 for 循环
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// hash
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let needVal = target - val;
    if (obj[needVal] >= 0) {
      return [obj[needVal], i];
    } else {
      obj[val] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 13));
