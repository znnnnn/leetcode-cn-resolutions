/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr = Array(A.length)
  let even = 0
  let odd = 1
  A.forEach(a => {
    if (a % 2 == 0) {
      arr[even] = a
      even += 2
    } else {
      arr[odd] = a
      odd += 2
    }
  })
  return arr
}
