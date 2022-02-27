/**
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * 
 * Easy
 * 
 Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Example 3:
Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.
 
Constraints:
2 <= nums.length <= 1000
1 <= nums[i] <= 1000
 * 
 * @param {number[]} nums
 * @return {number}
 */

const findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let a = nums[0];
  let b = nums[nums.length - 1];
  if (b % a === 0) return a;
  let mid = Math.floor(b / 2);
  for (let i = mid; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return a;
};

const findGCDSol2 = function (nums) {
  nums.sort((a, b) => a - b);
  let a = nums[0];
  let b = nums[nums.length - 1];
  if (b % a === 0) return a;
  const getGCD = (a, b) => {
    if (a === 0) {
      return b;
    }
    if (b == 0 || a === b) {
      return a;
    }
    if (a > b) return getGCD(a - b, b);
    return getGCD(a, b - a);
  };
  return getGCD(a, b);
};
