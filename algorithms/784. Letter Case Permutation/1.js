/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  if (S.length == 0) return ['']
  var isNum = /[0-9]/.test(S[0])
  var upper = S[0].toUpperCase()
  var lower = S[0].toLowerCase()

  if (S.length == 1) {
    return isNum ? [upper] : [upper, lower]
  } else {
    var array = []
    var rest = letterCasePermutation(S.slice(1))
    for (var i of rest) {
      if (isNum) {
        array.push(upper + i)
      } else {
        array.push(upper + i)
        array.push(lower + i)
      }
    }
  }
  return array
}
