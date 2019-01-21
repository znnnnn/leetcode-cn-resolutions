/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    
  let dic = {}

  for(let i of A){

      if(i in dic) return i

      dic[i] = 0
  }    
};