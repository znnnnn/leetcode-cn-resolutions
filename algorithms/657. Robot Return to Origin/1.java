class Solution {
  public boolean judgeCircle(String moves) {
      char[] array = moves.toCharArray();
      int u=0, d=0,l=0,r=0;//上下左右
      for (char item : array) {
          switch (item) {
              case 'U':
                  u+=1;
                  break;
              case 'D':
                  d+=1;
                  break;
              case 'L':
                  l+=1;
                  break;
              case 'R':
                  r+=1;
                  break;
          }
      }
      return  u==d&&l==r;
  }
}