'use strict';

function lowerCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += string[i];
    }
  }

  return result;
}

// It should log -> "tiens tiens tiens ..."
console.log(
  lowerCase('Tiens Tiens Tiens ...'),
);

// It should log -> "c'est reparti comme en 46"
console.log(
  lowerCase("C'EST REPARTI COMME EN 46"),
);
