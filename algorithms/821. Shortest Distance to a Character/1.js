/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const a = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) a.push(i)
  }
  const b = []
  for (let i = 0; i < S.length; i++) {
    b[i] = 9999
    for (let j = 0; j < a.length; j++) {
      if (Math.abs(i - a[j]) < b[i]) b[i] = Math.abs(i - a[j])
    }
  }
  return b
}
