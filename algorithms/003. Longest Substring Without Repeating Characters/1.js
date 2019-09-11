/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0,
    start = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    if (map.has(v) && map.get(v) >= start) {
      start = map.get(v) + 1
    }
    map.set(v, i)
    max = Math.max(max, i - start + 1)
  }
  return max
}
