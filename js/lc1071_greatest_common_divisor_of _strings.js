

/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 * Easy
 * 
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Givn two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 
Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
 * 
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var gcdOfStrings = function(str1, str2) {
    if (str1.length < str2.length)
      {
        return gcdOfStrings(str2, str1);
      }
 
      // If str1 is not the
      // concatenation of str2
      else if (!str1.startsWith(str2))
      {
        return "";
      }
      else if (str2.length == 0)
      {
        // GCD string is found
        return str1;
      }
      else
      {
        // Cut off the common prefix
        // part of str1 & then recur
        return gcdOfStrings(str1.substr(str2.length), str2);
      }
};