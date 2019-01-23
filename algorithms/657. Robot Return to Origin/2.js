/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;
  
  let actions = moves.split('');
  actions.forEach((act) => {
      switch(act) {
          case 'U': {
              y++;
              break;
          }
          case 'D': {
              y--;
              break;
          }
          case 'R': {
              x++;
              break;
          }
          case 'L': {
              x--;
              break;
          }
      }
  })
  return x == 0 && y == 0;
};