/**
 * @param {number} n
 * @return {string}
 */
const cache = [, '1'];
var countAndSay = function(n) {
  if(cache[n]) {
    return cache[n];
  } else {
    const str = countAndSay(n - 1);
    cache[n] = str.match(/(\d)\1*/g).map(item => item.length + item[0]).join('');
    return cache[n];
  }
};