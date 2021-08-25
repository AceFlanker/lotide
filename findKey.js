// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const findKey = (justAnObject, illBeBach) => {
  let whereAreYou = undefined;
  for (const key in justAnObject) {
    if (illBeBach(justAnObject[key])) whereAreYou = key;
  }
  return whereAreYou;
};

module.exports = findKey;

// Test Code
describe('#findKeyByValue', () => {
  const results = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
  it('returns true for first restaurant with 2 Michelin stars', () => {
    assert.strictEqual(results, 'Ora');
  });
});