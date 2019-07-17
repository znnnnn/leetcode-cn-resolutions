/*
 * @Description:用Map对象替代原生对象
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-17 15:40:03
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-17 15:42:57
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map()
  let result = []
  nums1.forEach(elem=>{
      if(map.has(elem)){
          map.set(elem,map.get(elem)+1)
      }else{
          map.set(elem,1)
      }
  })
  nums2.forEach(elem=>{
      if(map.has(elem)&&map.get(elem)>0){
          result.push(elem)
          map.set(elem,map.get(elem)-1)
      }
  })
  return result
};