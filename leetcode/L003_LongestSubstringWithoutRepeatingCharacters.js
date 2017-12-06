/**
 * User:  zxwtry
 * File:  L003_LongestSubstringWithoutRepeatingCharacters.js
 * Date:  2017/12/6
 * Time:  17:20
 */

/**
 * @param {string} s
 * @return {number}
 * desc 找到最长  没有重复字符  子串
 * result   983/983  198ms
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var map = new Map();
    var rec = 0;
    var ans = 0;
    for (var i = 0; i < len; i ++) {
        var cut = s[i];
        if (map[cut] != undefined) {
            rec = Math.max(rec, map[cut] + 1);
        }
        map[cut] = i;
        ans = Math.max(i - rec + 1, ans);
    }
    return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));