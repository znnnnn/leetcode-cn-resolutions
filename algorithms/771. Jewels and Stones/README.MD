### [20\. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度 **简单**

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

注意空字符串可被认为是有效字符串。

**示例 1:**

**示例 2:**

**示例 3:**

**示例 4:**

**示例 5:**

```
输入: "()"
输出: true
输入: "()[]{}"
输出: true
输入: "(]"
输出: false
输入: "([)]"
输出: false
输入: "{[]}"
输出: true
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // 堆栈的概念
    
    const B = {
        "(":1,
        ")":-1,
        "{":2,
        "}":-2,
        "[":3,
        "]":-3
    }
    
    if(s.length <= 0){
       return true
    }
    
    let stack = [s[0]]
    
    for(let i=1;i<s.length;i++){
        
        
        if(B[s[i]] + B[stack[stack.length-1]] == 0){
            stack.pop()  
            
        }else{
            stack.push(s[i])
        }
        
        // s[i] 循环到第几个
        // stack[stack.length-1]  //备选池最后一个
        
        // console.log('第'+i+'次执行结束后stack:',stack)
        // console.log(s[i],stack[stack.length-1])
    }
    
    if(stack.length == 0){
        return true
    }else {
        return false
    }
};
```