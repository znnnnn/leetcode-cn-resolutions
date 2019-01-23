class Solution {
  public int[] sortArrayByParityII(int[] A) {
      int i = 0;
      int j = 1;
      int[] b = new int[A.length];
      for(int n : A){
          if(n % 2 == 0){
              b[i] = n;
              i += 2;
          }else{
              b[j] = n;
              j += 2;
          }
      }
      return b;
  }
}