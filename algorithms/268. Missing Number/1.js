/*
 * @Description: 位运算：异或
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-16 21:58:06
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-16 21:58:42
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missing = nums.length
  for (let i = 0; i < missing; i++) {
    missing = missing ^ i
  }
  return missing
}
