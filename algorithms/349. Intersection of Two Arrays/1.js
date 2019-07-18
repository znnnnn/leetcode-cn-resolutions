/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-18 21:20:11
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-18 21:25:09
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  let res = [];
  for(let key of nums1.keys()) {
      if (nums2.has(key)) {
          res.push(key);
      }
  }
  return res;
};