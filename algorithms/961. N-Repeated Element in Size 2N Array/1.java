class Solution {
  public int repeatedNTimes(int[] A) {
      Map<Integer, Integer> map = new HashMap<Integer, Integer>();
      for(int x : A){
          int count = map.getOrDefault(x, 0) + 1;
          map.put(x, count);
          if(count > 1){
              return x;
          }
      }
      return 0;
  }
}