'use strict';

const HashTable = require('../hash-table/hashtable.js');

function repeatedWord(string) {
  // remove punctuation, etc, so that only 'words' with a-zA-Z pass. LEAVE spaces in...
  const onlyCharsString = string.replace(/[^a-zA-Z ]/g, '');

  // split string at spaces (.split puts them into an array)
  const words = onlyCharsString.split(' ');

  const wordMap = new HashTable(1024);

  let firstDuplicate = 'No duplicate words';

  for(let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let containsWord = wordMap.contains(word);
    
    if (containsWord) {
      firstDuplicate = word;
      break; // break out once a match has been found. CANNOT use .forEach here because of the break
    }
  
    if (!containsWord) {
      wordMap.add(word, word);
    }
  }
  return firstDuplicate;
}

console.log('the duplicate word is', repeatedWord('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'));
module.exports = repeatedWord;
