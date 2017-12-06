/**
 * User:  zxwtry
 * File:  L001_TwoSum.js
 * Date:  2017/12/6
 * Time:  10:46
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * desc 两次遍历
 * result AC 19/19 185ms
 */
var twoSum1 = function(nums, target) {
    var length = nums.length;
    for (var i = 0; i < length; i ++) {
        for (var j = i + 1; j < length; j ++) {
            if (nums[i] + nums[j] == target) {
                return new Array(i, j);
            }
        }
    }
    return new Array(0, 1);
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * desc map
 * result AC 19/19 89ms
 */
var twoSum2 = function(nums, target) {
    var length = nums.length;
    var map = new Map();
    for (var i = 0; i < length; i ++) {
        var val = nums[i].toString();
        if (map[val] != undefined) {
            return new Array(parseInt(map[val]), i);
        }
        map[(target - nums[i]).toString()] = i;
    }
    return new Array(0, 1);
};


var nums = new Array(2, 8, 11, 15, 7);
var target = 9;
console.log(twoSum2(nums, target));