### [48\. 旋转图像](https://leetcode-cn.com/problems/rotate-image/)

难度: **中等**


给定一个 _n _× _n_ 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

**说明：**

你必须在旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要**使用另一个矩阵来旋转图像。

**示例 1:**

```
给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**示例 2:**

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```


#### Solution

Language: **Java**

```java
class Solution {
    public void rotate(int[][] matrix) {

        int len = matrix.length;
​
        /**
         * 复制一份
         */
        int[][] back = new int[len][len];
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                back[i][j] = matrix[i][j];
            }
        }
​
        /**
         * 顺时针旋转90°
         */
        for (int i = 0; i < len; i++) {
            int one = len - i - 1;
            System.out.println(one);
            for (int j = 0; j < back[i].length; j++) {
                matrix[j][one] = back[i][j];
            }
        }

    }
}
```