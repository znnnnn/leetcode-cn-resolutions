/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0
  let bound = Math.pow(2, 31)
  while (x !== 0) {
    rev = rev * 10 + x % 10
    x = x / 10 | 0
  }
  if (rev > bound - 1 || rev < -bound) {
      return 0
  }
  return rev
};
