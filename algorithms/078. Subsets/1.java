import java.util.*;

class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> list = new ArrayList<Integer>();
        if (nums == null || nums.length == 0) return res;
        subsetsRecur(res, list, nums, 0);
        return res;
    }

    private void subsetsRecur(List<List<Integer>> res, List<Integer> list, int[] nums, int j) {
        res.add(new ArrayList<Integer>(list));
        for (int i = j; i < nums.length; i++) {
            list.add(nums[i]);
            subsetsRecur(res, list, nums, i + 1);
            list.remove(list.size() - 1);
        }
    }
}