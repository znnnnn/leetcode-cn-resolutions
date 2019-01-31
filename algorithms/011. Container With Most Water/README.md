### [11\. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/solution/)

难度: **中等**


给定 _n_ 个非负整数 _a_<sub style="display: inline;">1</sub>，_a_<sub style="display: inline;">2，</sub>...，_a_<sub style="display: inline;">n，</sub>每个数代表坐标中的一个点 (_i_, _a<sub style="display: inline;">i</sub>_) 。在坐标内画 _n_ 条垂直线，垂直线 _i_ 的两个端点分别为 (_i_, _a<sub style="display: inline;">i</sub>_) 和 (_i_, 0)。找出其中的两条线，使得它们与 _x_ 轴共同构成的容器可以容纳最多的水。

**说明：**你不能倾斜容器，且 _n_ 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

<small style="display: inline;">图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。</small>

**示例:**

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0, right = height.length - 1;
    var max = 0;

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return max;
};
```

Language: **Java**

```java
class Solution {
    //双指针法    9ms
    public int maxArea(int[] height) {
        int res = 0;
        int l = 0;
        int r = height.length - 1;
        while (l < r) {
            res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
```