// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const head = (arr) => {
  return arr[0];
};

module.exports = head;

// Test Codes
describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it('returns "Hello" for "Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('returns "Darkness" for ["Darkness", "My", "Old", "Friend"]', () => {
    assert.strictEqual(head(["Darkness", "My", "Old", "Friend"]), "Darkness");
  });
});