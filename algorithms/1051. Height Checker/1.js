/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // 先排序好一个数组，再进行逐个对比
  let counter = 0
  const copy = [...heights]
  copy.sort((a, b) => a - b)
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== heights[i]) counter++
  }
  return counter
}