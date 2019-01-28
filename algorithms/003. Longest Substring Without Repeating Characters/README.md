### [3\. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/)

难度 **中等**

给定一个字符串，请你找出其中不含有重复字符的 **最长子串 **的长度。

**示例 1:**

**示例 2:**

**示例 3:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0, start = 0;
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const v = s[i];
        if (map.has(v) && map.get(v) >= start) {
            start = map.get(v) + 1;
        }
        map.set(v, i);
        max = Math.max(max, i - start + 1);
    }
    return max;
};
```

Language: **Java**

```java
class Solution {
  public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        int[] index = new int[128]; // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            i = Math.max(index[s.charAt(j)], i);
            ans = Math.max(ans, j - i + 1);
            index[s.charAt(j)] = j + 1;
        }
        return ans;
    }
}
```