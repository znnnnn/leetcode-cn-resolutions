class Solution {
  public int[][] flipAndInvertImage(int[][] A) {
      if (A == null) return null;
      for (int[] row : A) {
          if (row == null) continue;
          for (int i = 0, j = row.length - 1; i < j; ++i,--j) {
              int t = row[i];
              row[i] = row[j];
              row[j] = t;
          }
          for(int i = 0; i < row.length; ++i) {
              row[i] = row[i] ^ 1;
          }
      }
      return A;
  }
}