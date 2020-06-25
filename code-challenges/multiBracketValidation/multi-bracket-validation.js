'use strict';

function multiBracketValidation(string) {
  let validator = [];
  let validated = false;
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < string.length; i++) {
    // did you get an opener?
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      validator.unshift(string[i]);
      // did you get a closer?
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      let current = validator.shift();
      // does it match the most recent opener?
      if (string[i] === map[current] && validator.length === 0) {
          validated = true;
      } 
    }
  }
  return validated;
}

console.log(multiBracketValidation('{}(())'));
module.exports = multiBracketValidation;