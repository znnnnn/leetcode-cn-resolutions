/**
 * @param {int} num 整数
 */
var findComplement = function(num) {
  let temp = num
  let c = 0
  while (temp > 0) {
    temp >>= 1
    c = (c << 1) + 1
  }
  return num ^ c
}
