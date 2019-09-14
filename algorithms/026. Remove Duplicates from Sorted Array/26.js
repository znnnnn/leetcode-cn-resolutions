/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-09-14 22:51:06
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-09-14 22:51:06
 */
var removeDuplicates = function (nums) {    
  nums.splice(0, nums.length, ...new Set(nums))
  return nums.length   
};