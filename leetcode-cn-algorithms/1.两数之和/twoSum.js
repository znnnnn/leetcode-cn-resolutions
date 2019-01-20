/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (i = 0;i < nums.length;i++ ) {
        //j从i+1开始遍历
        for (j = i + 1;j < nums.length;j++ ) {
            if ( nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};