/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) {
      return 0;
  }
  const list = [0, 1];
  for (let i = 2; i <= N; i++) {
      list.push(list[i - 1] + list[i - 2]);
  }
  return list[list.length - 1];
};