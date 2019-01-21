/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  A.forEach(p=>{
       p.reverse().forEach((v,i)=>{
          p[i] = !v
       })
  })
   return A;
};