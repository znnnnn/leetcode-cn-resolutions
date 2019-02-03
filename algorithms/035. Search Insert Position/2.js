/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    const m = ~~((left + right) / 2);
    if (nums[m] > target) {
      right = m;
    } else if (nums[m] < target) {
      left = m + 1;
    } else {
      return m
    }
  }

  return left;
};