// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const countLetters = function(inputStr) {
  let letterCount = {};
  for (const letter of inputStr) {
    if (letter === ' ') {
      continue;
    } else if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;

// Test Code
describe('#countLetters', () => {
  it('returns true for letter counts of ("lighthouse in the house") and { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }', () => {
    assert.deepEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});