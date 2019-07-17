/*
 * @Description: 哈希表法
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-17 15:35:43
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-17 15:36:17
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = []
  let hashMap = {}
  for(let i of nums1) {
      if(hashMap.hasOwnProperty(i)) {
          hashMap[i] += 1
      } else {
          hashMap[i] = 1
      }
  }
  for(let p of nums2 ) {
      if(hashMap[p] >0){
          result.push(p)
          hashMap[p] -=1
      }
  }
  return result
};