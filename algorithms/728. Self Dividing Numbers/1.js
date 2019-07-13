/*
 * @Description:
 * @version:
 * @Author: znnnnn
 * @Date: 2019-07-13 22:33:23
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-13 22:33:33
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []

    for(; left <= right;left++) {
        let n = left
        let str = ""

        while(n > 0){
            d = n % 10
            n = (n - d)/10
            str = d + str

            if(left % d || d == 0) {break}
            if(str == left) {result.push(str)}
        }
    }
    return result
};