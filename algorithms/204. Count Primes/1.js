/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  //创建一个长度为n，默认值为0的数组
  let notPrimes = new Uint8Array(n)
  let count = 0
  // 从2开始
  // 大概步骤为，第一次筛选2的倍数的数字，将其都筛选出去，第二轮筛选3的倍数的数字，筛选后，剩下的第一个数字就是5（因为4在第一次筛选的时候作为2的倍数已经筛出去）第三轮则筛选5倍数的数字，第四轮7倍数，第五轮11倍数……依次筛选下去，筛n轮。
  for (let i = 2; i < n; i++) {
    if (notPrimes[i] == false) {
      console.log(notPrimes[i])
      count += 1
      // 记录所有的乘积
      for (let j = 1; i * j < n; j++) {
        notPrimes[i * j] = true
      }
    }
  }
  return count
}