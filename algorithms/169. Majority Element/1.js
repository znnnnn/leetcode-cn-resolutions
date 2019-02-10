/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
      if (count === 0) {
          candidate = num;
      }
      count = candidate === num ? count + 1 : count - 1;
  }
  return candidate;
};