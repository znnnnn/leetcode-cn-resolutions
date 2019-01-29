class Solution {
  public int myAtoi(String str) {
    boolean flag = false;
    boolean posi = true;
    long res = 0;
    for (int i = 0; i < str.length(); i++) {
      char c = str.charAt(i);
      if (c >= '0' && c <= '9')
        res = res * 10 + (c - '0');
      else if (c == '-' && !flag)
        posi = false;
      else if (c == '+' && !flag)
        posi = true;
      else if (flag || !flag && c != ' ')
        break;
      if (!flag && c != ' ')
        flag = true;
      if (res - 1 > Integer.MAX_VALUE)
        break;
    }
    return posi ? (int) Math.min(res, Integer.MAX_VALUE) : (int) Math.max(-1 * res, Integer.MIN_VALUE);
  }
}