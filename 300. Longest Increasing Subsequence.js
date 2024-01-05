
// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    let arr = [];
 
    for(let i = 0; i < nums.length; i++) {
        let max = 1; // Minimum length of LIS is 1
 
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                max = Math.max(max, arr[j] + 1);
            }
        }
 
        arr[i] = max;
    }
 
    return Math.max(...arr, 0); // Return the maximum value in the 'arr' array
 };
 



// formula to reviewf(x) < f(y)

//Strictly Increasing Function - A function f(x) is said to be strictly increasing on an interval I if for any two numbers x and y in I such that x < y, we have f(x) < f(y)
//you need to give interger array nums
// you need to return the length of the longest strictly incresing subsequence
// subsequence(is an array that can be derived from another array by delating)
//some or no elements without changing the order of the remaining elements
//