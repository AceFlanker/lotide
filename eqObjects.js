// Dependency Functions Imports
const eqArrays = require('./eqArrays');
const assert = require('chai').assert;

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) { // This if statement blocks eqArrays from returning true
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// Test Codes
describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('returns false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it('returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it('returns false for { c: "1", d: ["2", 3] },  c: "1", d: ["2", 3, 4] }', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});