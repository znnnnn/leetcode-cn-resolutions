/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  var strLength = ''
  var arr = chars
  for (var str of words) {
    strLength += str
    for (var char of str) {
      if (arr.indexOf(char) != -1) {
        arr = arr.replace(new RegExp(char), '')
      } else {
        strLength = strLength.replace(str, '')
        break
      }
    }
    arr = chars
  }
  return strLength.length
}
