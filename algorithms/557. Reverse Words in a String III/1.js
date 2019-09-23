/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(' ')
  return words.map(item => item.split('').reverse().join('')).join(' ')
};