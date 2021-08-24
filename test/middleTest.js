// middle and Dependency Functions Imports
const middle = require('../middle');
const assert = require('chai').assert;

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