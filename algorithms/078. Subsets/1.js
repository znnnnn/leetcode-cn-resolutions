/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
 [
   [],
   [],
   []
 ]

 slice不修改数组，而是返回一个新数组。
 每一次循环，拷贝上一次的结果，增添数字

 [1]
 [1,2]
 [1,2,3]
*/

var subsets = function(nums) {
  var lists = [[]];

  for (var i = 0; i < nums.length; i++) {
      for (var j = 0, size = lists.length; j < size; j++) {
          var list = lists[j].slice();

          list.push(nums[i]);
          lists.push(list);
      }
  }
  return lists;
};