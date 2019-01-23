/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  function count(text){
      reg = new RegExp (text, "g")
      result = moves.match(reg)
      if (result) {
          return result.length
      }
    }
    return count('U') == count('D') && count('L') == count('R')
};
