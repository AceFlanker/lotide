// Dependency Functions Imports
const assert = require('chai').assert;
const eqObjects = require('./eqObjects');

// Function Definition
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 0) {
    return true;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i]) || Array.isArray(arr2[i]) && !eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (typeof arr1[i] === 'object') {
      if (typeof arr2[i] !== 'object' || typeof arr2[i] === 'object' && eqObjects(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
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
  it('returns false for ["1", ["2"], "3"], ["1", ["2"], "3"]', () => {
    assert.strictEqual(eqArrays(['1', ['2'], '3'], ['1', ['2'], '3']), true);
  });
});