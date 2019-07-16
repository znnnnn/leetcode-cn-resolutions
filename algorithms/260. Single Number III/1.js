/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-16 21:04:47
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-16 21:04:53
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    set.has(num) ? set.delete(num) : set.add(num)
  }
  return [...set]
}
