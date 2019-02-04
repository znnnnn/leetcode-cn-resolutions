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