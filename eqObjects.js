// Dependency Functions Imports
const assert = require('chai').assert;
const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!Array.isArray(object2[key]) || Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      if (typeof object2[key] !== 'object' || typeof object2[key] === 'object' && !eqObjects(object1[key], object2[key])) {
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
  const ef = { e: { e: "1" }, f: "2" };
  const fe = { f: "2", e: { e: "1" } };
  const ghi = { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" };
  const ihg = { i: "9001", h: { i: "9001" }, g: { h: { i: "9001" } } };
  const ghi1 = { g: { h: { i: "8999" } }, h: { i: "9001" }, i: "9001" };
  const ghi2 = { g: { h: { h: "9001" } }, h: { i: "9001" }, i: "9001" };
  const ghi3 = { g: { h: "9001" }, h: { i: "9001" }, i: "9001" };
  const ghi4 = { g: { i: "9001" }, h: { i: "9001" }, i: "9001" };
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('returns false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it('returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it('returns false for { c: "1", d: ["2", 3] } and  { c: "1", d: ["2", 3, 4] }', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it('returns true for { e: { e: "1" }, f: "2" } and { f: "2", e: { e: "1" } }', () => {
    assert.strictEqual(eqObjects(ef, fe), true);
  });
  it('returns true for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { h: { i: "9001" } }, h: { i: "9001" } }', () => {
    assert.strictEqual(eqObjects(ghi, ihg), true); // Different ordering
  });
  it('returns false for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { h: { i: "8999" } }, h: { i: "9001" } }', () => {
    assert.strictEqual(eqObjects(ghi, ghi1), false); // Different primitive values in an inner object
  });
  it('returns false for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { h: { h: "9001" } }, h: { i: "9001" }, i: "9001" }', () => {
    assert.strictEqual(eqObjects(ghi, ghi2), false); // Different keys in an inner object
  });
  it('returns false for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { h: "9001" }, h: { i: "9001" }, i: "9001" }', () => {
    assert.strictEqual(eqObjects(ghi, ghi3), false); // Identical keys, object vs. primitive as a value
  });
  it('returns false for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { i: "9001" }, h: { i: "9001" }, i: "9001" }', () => {
    assert.strictEqual(eqObjects(ghi, ghi4), false); // Different keys, object vs. primitive as a value
  });
  it('returns false for { g: { h: { i: "9001" } }, h: { i: "9001" }, i: "9001" } and { g: { i: "9001" }, h: { i: "9001" }, i: "9001" }', () => {
    assert.strictEqual(eqObjects(ghi, ghi4), false); // Different keys, object vs. primitive as a value
  });


  // Compass Driver Codes
  it('returns false for eqObjects({ a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});