### [17\. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/comments/)

难度 **中等**

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

**示例:**

**说明:**
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'prqs',
        8: 'tuv',
        9: 'wxyz'
    };
    let last = [''];
    for (const num of digits) {
        const current = [];
        for (const item of last) {
            for (const char of map[num]) {
                current.push(`${item}${char}`);
            }
        }
        last = current;
    }
    return last;
};
```

Language: **Java**

```java
class Solution {
    /**
     * 思路：先搞一个map的映射，映射数字和字符的关系。
     */

    public List<String> letterCombinations(String digits) {
        Map<Character,String> map1=new HashMap<Character,String>();
        map1.put('2',"abc");
        map1.put('3',"def");
        map1.put('4',"ghi");
        map1.put('5',"jkl");
        map1.put('6',"mno");
        map1.put('7',"pqrs");
        map1.put('8',"tuv");
        map1.put('9',"wxyz");
        //存放下一次增加前的
        List<String> list1=new ArrayList<String>();
        list1.add("");
        //存放增加后的
        List<String> list2=new ArrayList<String>();
        for(int i=0;i<digits.length();i++){
            list2.clear();
            char c=digits.charAt(i);
            String s=map1.get(c);
            //System.out.println(list1);
            for(int j=0;j<s.length();j++){
                    for (String s1:list1){
                        String s2=s1+s.charAt(j);
                        //System.out.println(s2);
                        list2.add(s2);
                    }
            }
            list1.clear();
            list1.addAll(list2);
        }
        //System.out.println(list2);
        return list2;
    }
}
```