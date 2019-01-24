/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  for (let e of s) {
      res = res * 26 +  e.charCodeAt() - 64;
  }
  return res;
};