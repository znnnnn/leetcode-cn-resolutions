/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-09 16:28:10
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-09 17:06:31
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = Array(m).fill(1);
  console.log(dp)

  //从右向左更新所有列
  for (let i = n - 2; i >= 0; i--) {
    console.log('i',i)
      for (let j = m - 2; j >= 0; j--) {
          //右边的和下边的更新当前元素
          dp[j] = dp[j] + dp[j + 1];
          console.log('j',j)
          console.log(dp)
      }
  }

  // console.log(dp)

  return dp[0];
};