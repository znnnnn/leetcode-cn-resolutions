/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var res = []
  var helper = function (n, k, index, temp) {
    if (k === 0) {
      res.push(temp.slice())
      return
    }
    for (var i = index; i <= n; i++) {
      temp.push(i);
      helper(n, k - 1, i + 1, temp);
      temp.pop();
    }
  }
  helper(n, k, 1, [])
  return res
};