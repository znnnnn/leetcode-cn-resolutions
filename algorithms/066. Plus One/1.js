/*
 * @Description:
 * @version:
 * @Author: znnnnn
 * @Date: 2019-08-08 17:05:21
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-08-08 17:15:06
 */
var plusOne = function(digits) {
  const result = []
  let num
  const lastIncrease = digits.reduceRight((increase, curNum) => {
    num = curNum + increase
    result.unshift(num % 10)
    return num >= 10 ? 1 : 0
  }, 1)
  if (lastIncrease) {
    result.unshift(lastIncrease)
  }
  return result
}
plusOne([1,2,3,4,9])