'use strict';

function acronym(string) {
  let result = '';

  for ( let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result = result + string[i];
    }
  }

  return result;
}

// It should log -> "GBA"
console.log(
  acronym('Game Boy Advanced'),
);

// It should log -> "NFT"
console.log(
  acronym('Non-Fungible Token'),
);
