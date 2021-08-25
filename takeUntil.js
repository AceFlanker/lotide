// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const takeUntil = (inputArr, callMeBach) => {
  let newArr = [];
  for (let i = 0; i <  inputArr.length; i++) {
    if (callMeBach(inputArr[i])) {
      newArr = inputArr.slice(0, i);
      break;
    }
  }
  return newArr;
};

module.exports = takeUntil;

// Test Codes
describe('#takeUntil', () => {
  it('returns true for [1, 2, 5, 7, 2, -1, 2, 4, 5] until a negative number and [ 1, 2, 5, 7, 2 ])', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  it('returns true for ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"] until a "," (comma) and [ "I\'ve", "been", "to", "Hollywood" ]', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});


