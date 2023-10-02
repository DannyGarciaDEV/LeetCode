// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const words1 = s1.split(" ");
    const words2 = s2.split(" ");
    const wordCount = {}; // To store word frequencies

    // Count word frequencies in s1
    for (const word of words1) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Count word frequencies in s2
    for (const word of words2) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    const uncommonWords = [];

    // Find uncommon words (words with a frequency of 1)
    for (const word in wordCount) {
        if (wordCount[word] === 1) {
            uncommonWords.push(word);
        }
    }

    return uncommonWords;
};
