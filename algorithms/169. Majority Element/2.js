/*
 * @Description:
 * @version:
 * @Author: znnnnn
 * @Date: 2019-07-16 19:49:49
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-16 19:54:16
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = 0
  let count = 0
  for (let num of nums) {
    if (num == candidate) {
      count += 1
    } else if (count > 0) {
      count -= 1
    } else {
      count = 1
      candidate = num
    }
    return candidate
  }
}
