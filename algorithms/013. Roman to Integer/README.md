### [13\. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/submissions/)

难度 **简单**

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

例如， 罗马数字 2 写做 `II` ，即为两个并列的 1。12 写做 `XII` ，即为 `X` + `II` 。 27 写做  `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例 1:**

**示例 2:**

**示例 3:**

**示例 4:**

**示例 5:**

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000输入: "III"
输出: 3输入: "IV"
输出: 4输入: "IX"
输出: 9输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

#### Solution

Language: **Java**

```java
class Solution 
{
   public int romanToInt(String s) 
   {
    int[] nums=new int[s.length()];
    for(int i=0;i<s.length();i++)
    {
        switch (s.charAt(i))
        {
            case 'M':
                nums[i]=1000;
                break;
            case 'D':
                nums[i]=500;
                break;
            case 'C':
                nums[i]=100;
                break;
            case 'L':
                nums[i]=50;
                break;
            case 'X' :
                nums[i]=10;
                break;
            case 'V':
                nums[i]=5;
                break;
            case 'I':
                nums[i]=1;
                break;
        }
    }
    int sum=0;
    for(int i=0;i<nums.length-1;i++)
    {
        if(nums[i]<nums[i+1])
            sum-=nums[i];
        else
            sum+=nums[i];
    }
    return sum+nums[nums.length-1];
   }
}
```

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
  
  const len = s.length;
  let res = 0;
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  /**
  * @description 此提交根据罗马数字计算规则进行。
  * 从左到右，前一位大于后一位 ，增加，反之减少。
  */
  for (let sIndex = 0; sIndex < len - 1; sIndex++) {
    if (map[s[sIndex]] < map[s[sIndex + 1]]) {
      res -= map[s[sIndex]];
    } else {
      res += map[s[sIndex]];
    }
  }  
  res += map[s[len - 1]];
  return res;
}
```