// Dependency Function Import
const assert = require('chai').assert;

// Function Definitnion
const middle = function(inputArr) {
  const findMid = function(arr) {
    const halfLength = Math.floor(arr.length / 2);
    if (arr.length < 3) {
      return undefined;
    } else if (arr.length % 2 === 0) {
      return [halfLength - 1, halfLength];
    } else {
      return [halfLength];
    }
  };
  let midArr = [];
  const outputMid = function(arr) {
    if (findMid(arr)) {
      findMid(arr).forEach(index => {
        midArr.push(arr[index]);
      });
    }
  };
  outputMid(inputArr);
  return midArr;
};

module.exports = middle;

// Test Codes
describe('#middle', () => {
  it('returns true for [] and []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('returns true for [1] and []', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns true for [1, 2] and []', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns true for [1, 2, 3] and [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns true for [1, 2, 3, 4] and [2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns true for [1, 2, 3, 4, 5] and [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});