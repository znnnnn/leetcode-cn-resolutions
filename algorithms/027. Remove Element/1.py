class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        n = len(nums)
        for i in range(0, n):
            if val in nums:
                nums.remove(val)
            else:
                return len(nums)