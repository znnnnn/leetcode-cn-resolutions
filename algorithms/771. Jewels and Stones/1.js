/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if(J.length === 0) {
      return 0;
  }
  return [...J].reduce((acc, v) => {
      const resArr = S.match(new RegExp(`${v}`,'g'));
      return acc += Array.isArray(resArr) ? resArr.length : 0
  }, 0)
};