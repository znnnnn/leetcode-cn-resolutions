class Solution {
  public int hammingDistance(int x, int y) {
      return Integer.toBinaryString(x^y).replaceAll("0","").length();
  }
}