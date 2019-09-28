/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let thisSum = 0
  let maxSum = nums[0]

  for (let i of nums) {
    if (thisSum > 0) {
      thisSum += i
    } else {
      thisSum = i
    }
    maxSum = Math.max(maxSum, thisSum)
  }
  return maxSum
}
