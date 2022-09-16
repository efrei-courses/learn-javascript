'use strict';

function upperCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += string[i];
    }
  }

  return result;
}

// It should log -> UHOO
console.log(
  upperCase('uhoo ?'),
);

// It should log ->
