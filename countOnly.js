// Dependency Function Import
const assert = require('chai').assert;


// Function Definition
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// Test Codes
describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it('returns true for "Jason" and 1', () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it('returns true for "Karima" and undefined"', () => {
    assert.strictEqual(result["Karima"], undefined);
  });
  it('returns false for "Fang" and 2', () => {
    assert.strictEqual(result["Fang"], 2);
  });
  it('returns false for "Agouhanna" and undefined', () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});