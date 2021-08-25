// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === 0) {
    return true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      if (i === arr1.length - 1) {
        return true;
      }
    }
  }
};

module.exports = eqArrays;

// Test Codes
describe('#eqArrays', () => {
  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false for [1, 2, 3] and [1, 3, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
  });
  it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it('returns false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});