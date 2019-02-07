/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  a = 0
  for (num of nums) {
    a = a ^ num
  }
  return a
};