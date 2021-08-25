// eqArrays and Dependency Functions Imports
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] and [1, 3, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
  });
  it("returns true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});