class Solution {
  List<List<Integer>> res = new ArrayList<>();
  int n;

  public List<List<Integer>> combine(int n, int k) {
      this.n = n;
      backtrack(new ArrayList<>(), 0, k);
      return res;
  }

  private void backtrack(ArrayList<Integer> path, int start, int k) {
      if (k == 0) {
          res.add(new ArrayList<>(path));
          return;
      }
      for (int i = start; i < n; i++) {
          path.add(i + 1);
          backtrack(path, i + 1, k - 1);
          path.remove(path.size() - 1);
      }
  }
}