/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let lr = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      lr++
    } else {
      lr--
    }
    if (lr === 0) {
      max++
    }
  }
  return max
}
