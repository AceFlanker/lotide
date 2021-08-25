// Dependency Function Import
const assert = require('chai').assert;

const without = function(source, toBeRemoved) {
  let newArr = source.slice();
  for (let i = 0; i < newArr.length; i++) {
    toBeRemoved.forEach(element => {
      if (newArr[i] === element) {
        newArr.splice(i, 1);
        i--;
      }
    });
  }
  return newArr;
};

module.exports = without;

// Test Codes
describe('#eqArrays', () => {
  it('returns true for ["1", 2, 3] and ["1", 2])', () => {
    assert.deepEqual(without(['1', 2, 3], [3]), ['1', 2]);
  });
  it('returns true for ["hello", "world", "lighthouse"] without ["lighthouse"] and ["hello", "world"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ['lighthouse']), ["hello", "world"]);
  });
});