// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === ' ') {
      continue;
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// Test Codes
describe('#letterPositions', () => {
  it("returns true for index 'u' in 'lighthouse in the house') and [0]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').l, [0]);
  });
  it("returns true for index 'l' in 'lighthouse in the house') and [1, 11]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11]);
  });
  it("returns true for index 'i' in 'lighthouse in the house') and g, [2]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').g, [2]);
  });
  it("returns true for index 'g' in 'lighthouse in the house') and [3, 5, 15, 18]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
  });
  it("returns true for index 'h' in 'lighthouse in the house') and [4, 14]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').t, [4, 14]);
  });
  it("returns true for index 't' in 'lighthouse in the house') and [6, 19]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').o, [6, 19]);
  });
  it("returns true for index 'o' in 'lighthouse in the house') and [7, 20]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').u, [7, 20]);
  });
  it("returns true for index 's' in 'lighthouse in the house') and [8, 21]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').s, [8, 21]);
  });
  it("returns true for index 'e' in 'lighthouse in the house') and [9, 16, 22]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
  });
  it("returns true for index 'n' in 'lighthouse in the house') and [12]", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').n, [12]);
  });
});