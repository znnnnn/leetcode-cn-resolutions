class Solution {
  public int singleNumber(int[] nums) {
      int result = 0;
      for(int i = 0;i < nums.length;i++){ //取异或，异或同一个数两次，原数不变
          result ^= nums[i];
      }
      return result;
  }
