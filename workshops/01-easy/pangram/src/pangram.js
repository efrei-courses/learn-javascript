'use strict';

function pangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < alphabet.length; i++) {
    if (!string.includes(alphabet[i])) {
      return false;
    }
  }

  return true;
}

// It should log -> true
console.log(
  pangram('abcdefghijklmnopqrstuvwxyz'),
);

// It should log -> false
console.log(
  pangram("1 minute c'est 100 secondes."),
);
