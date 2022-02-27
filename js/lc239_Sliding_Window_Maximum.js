/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


 Example 2:
Input: nums = [1], k = 1
Output: [1]
 * 
 */

const maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if(n * k == 0) return [];
    if(k == 1) return nums;
    // "left" array represents the maximum number in the window up to i from the left side
    // "right" array represents the maximum number in the window up to i from the right side
    const left = [nums[0]], right = [], out = [];
    right[n - 1] = nums[n - 1];
	
    for(let i = 1; i < n; i++) {
        left[i] = (i % k) ? Math.max(left[i - 1], nums[i]) : nums[i];
        const j = n - i - 1;
        right[j] = ((j + 1) % k) ? Math.max(right[j + 1], nums[j]) : nums[j];
    }
    
    for(let i = k - 1; i < n; i++) out.push(Math.max(left[i], right[i - k + 1]));
    
    return out;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))