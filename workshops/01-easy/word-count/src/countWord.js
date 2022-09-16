'use strict';

function countWords(sentence) {
  const words = sentence.split(' ');
  let result = {};
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (!(word in result)) {
      result[word] = 0;
    }

    result[word] += 1;
  }

  return result;
}

// It should log -> { "are": 1, "you": 1, "the": 1, "queen": 1 }
console.log(
  countWords('Are are aRe you the queen ?'),
);
