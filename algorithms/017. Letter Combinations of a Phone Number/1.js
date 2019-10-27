/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'prqs',
    8: 'tuv',
    9: 'wxyz',
  }
  let last = ['']
  for (const num of digits) {
    const current = []
    for (const item of last) {
      for (const char of map[num]) {
        current.push(`${item}${char}`)
      }
    }
    last = current
  }
  return last
}
