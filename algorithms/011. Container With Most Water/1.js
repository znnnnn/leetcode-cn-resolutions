/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0, right = height.length - 1;
	var max = 0;

	while (left < right) {
		max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
		if (height[left] < height[right])
			left++;
		else
			right--;
	}

	return max;
};