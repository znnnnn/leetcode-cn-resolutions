/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let str = ''
  let first = strs[0]
  for (let i = 0 ; i < first.length; i++) {
      for (let j = 1 ; j < strs.length; j++) {
          if (first[i] !== strs[j][i]) {
              return str
          }
      }
      str += first[i]
  }
  return str
}