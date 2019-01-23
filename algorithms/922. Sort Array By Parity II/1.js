/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  var arr = [];
  var brr = [];
  var j = 0;
  var m = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      arr[j] = A[i];
      j++;
    } else {
      brr[m] = A[i];
      m++;
    }
  }

  for (var k = 1; k <= A.length / 2; k++) {
    A[2 * k - 2] = arr[k - 1];
    A[2 * k - 1] = brr[k - 1];
  }
  return A;
};