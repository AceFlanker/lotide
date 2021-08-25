// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const tail = (arr) => {
  if (arr.slice(1).length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
};

module.exports = tail;

// Test Codes
describe('#tail', () => {
  it('returns true for the tail of ["Yo Yo", "Lighthouse", "Labs"] and ["Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it('returns true for the tail of [] and []', () => {
    const words1 = [];
    assert.deepEqual(tail(words1), []);
  });
  it('returns false for the tail of ["Yo Yo", "Lighthouse", "Labs"] and ["Heavyhouse", "Labs"', () => {
    const words2 = ["Yo Yo", "Lighthouse", "Labs"];
    assert.notDeepEqual(tail(words2), ["Heavyhouse", "Labs"]);
  });
  it('returns false for the tail of [] and [""]', () => {
    const words3 = [];
    assert.notDeepEqual(tail(words3), [``]);
  });
});