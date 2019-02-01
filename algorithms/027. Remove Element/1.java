class Solution {
  public int removeElement(int[] nums, int val) {
      int cursor = 0;
      for (int i = 0; i < nums.length;i++){
          if (val != nums[i]){
              nums[cursor++] = nums[i];
          }
      }
      return cursor;
  }
}