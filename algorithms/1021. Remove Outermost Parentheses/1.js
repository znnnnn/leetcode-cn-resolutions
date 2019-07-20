/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-20 20:20:00
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-20 20:20:07
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    //去除最外层括号，有效括号字符串左右单括号数相等
    var res = '';
    var count = 0;
    var start = 0;
    for(var i=0;i<S.length;i++){
        if('(' === S[i]){
            count++
        }else{
            count--;
        }
        if(count === 0){
            res += S.slice(start+1, i);
            start = i + 1;
        }
    }
    return res;
};