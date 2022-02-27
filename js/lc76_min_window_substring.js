

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
 *  If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A substring is a contiguous sequence of characters within the string.
 * 
 * Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    
    const getCharCountMap = (word) => {
        let charCountMap = new Map();
        for(let i=0;i<word.length;i++) {
            let c = word[i];
            if(charCountMap.has(c)) {
                charCountMap.set(c, Number(charCountMap.get(c))+1)
            }else {
                charCountMap.set(c, 1);
            }
        }
        return charCountMap;
    }
    
    const isMapEqual = (sourceMap, targetMap) => {
        
        for(const [key, value] of targetMap) {
            if(!sourceMap.has(key) || sourceMap.get(key)< value) {
                return false;
            }
        }
        return true;
    }
    
    let tCountMap = getCharCountMap(t);
    let tlen =t.length; //3
    let slen =s.length; //13
    
    let left =0; 
    let minLen=slen;
    let result="";
    while(left<= slen-tlen) {
        for(let i=left+tlen; i<=slen;i++) {
            const curr = s.substring(left, i);
            let currCharCountMap = getCharCountMap(curr);
            const isequal = isMapEqual(currCharCountMap, tCountMap)
            if(isequal && i-left <= minLen) {
                result = curr;
                minLen = i-left;
            }
        }
        left++;
    }
    
    return result;
};

console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"));

//"aaaaaaaaaaaabbbbbcdd"  "abcdd"