// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const findKeyByValue = function(inputObj, propValue) {
  let keyName = undefined;
  for (const key in inputObj) {
    if (inputObj[key] === propValue) {
      keyName = key;
    }
  }
  return keyName;
};

module.exports = findKeyByValue;

// Test Codes
describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it('returns true for the genre of "The Wire" and "drama"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns true for index the genre of "That \'70s Show" and undefined', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});