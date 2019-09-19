<!--
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-09-14 23:03:04
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-09-14 23:03:04
 -->
### [26\. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

Difficulty: **简单**

给定一个排序数组，你需要在<strong>

给定一个排序数组，你需要在删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在**修改输入数组**并在使用 O(1) 额外空间的条件下完成。

**示例 1:**

```
给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
```

**示例 2:**

```
给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**“引用”**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

<a href=&quot;http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95&quot; target=&quot;_blank&quot;>原地</a></strong>删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。</p>

<p>不要使用额外的数组空间，你必须在<strong><a href=&quot;https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95&quot; target=&quot;_blank&quot;>原地</a>修改输入数组</strong>并在使用 O(1) 额外空间的条件下完成。</p>

<p><strong>示例&amp;nbsp;1:</strong></p>

```
给定数组 <em>nums</em> = <strong>[1,1,2]</strong>, 

函数应该返回新的长度 <strong>2</strong>, 并且原数组 <em>nums </em>的前两个元素被修改为 <strong><code>1</code></strong>, <strong><code>2</code></strong>。 

你不需要考虑数组中超出新长度后面的元素。
```

<p><strong>示例&amp;nbsp;2:</strong></p>

```
给定<em> nums </em>= <strong>[0,0,1,1,1,2,2,3,3,4]</strong>,

函数应该返回新的长度 <strong>5</strong>, 并且原数组 <em>nums </em>的前五个元素被修改为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>2</code></strong>, <strong><code>3</code></strong>, <strong><code>4</code></strong>。

你不需要考虑数组中超出新长度后面的元素。
```

<p><strong>说明:</strong></p>

<p>为什么返回数值是整数，但输出的答案是数组呢?</p>

<p>请注意，输入数组是以<strong>&amp;ldquo;引用&amp;rdquo;</strong>方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p>

<p>你可以想象内部操作如下:</p>

```
// <strong>nums</strong> 是以&amp;ldquo;引用&amp;rdquo;方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中<strong>该长度范围内</strong>的所有元素。
for (int i = 0; i &amp;lt; len; i++) {
&amp;nbsp; &amp;nbsp; print(nums[i]);
}
```
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {    
  nums.splice(0, nums.length, ...new Set(nums))
  return nums.length   
};
```