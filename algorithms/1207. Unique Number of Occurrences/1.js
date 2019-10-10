/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 判断数组元素出现的个数
// 再次判断数组元素出现的个数
// 如果都是独一无二的,则数组长度等于数组元素的和
var uniqueOccurrences = function(arr) {
  let dic = {}
  let sum = 0
  for (item of arr ){
    if(dic[item] === undefined) {
      dic[item] = 1
    } else {
      dic[item] += 1
    }
  }
  for ( n of new Set(Object.values(dic))) {
    sum += n
  }
  return sum === arr.length
};