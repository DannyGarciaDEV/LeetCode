// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

function mostCommonWord(paragraph, banned) {
    // Convert paragraph to lowercase and split into words
    const words = paragraph.toLowerCase().match(/\w+/g);
  
    // Count the frequency of each word
    const freq = {};
    for (let word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }
  
    // Remove banned words from the frequency object
    for (let word of banned) {
      delete freq[word];
    }
  
    // Find the word with the maximum frequency count
    let maxFreq = 0;
    let result = '';
    for (let word in freq) {
      if (freq[word] > maxFreq) {
        maxFreq = freq[word];
        result = word;
      }
    }
  
    return result;
  }
//
//