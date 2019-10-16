/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  while (n != 1 && n != 4) {
    let sum = 0
    while (n) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    n = sum
  }
  return n == 1
}
