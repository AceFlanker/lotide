// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Test Codes
// Compass Scenario + Student Scenarios 1 and 2
describe('#map', () => {
  it('returns true for inital letters of ["ground", "control", "to", "major", "tom"] and ["g", "c", "t", "m", "t"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it('returns true for the quotients of [30, 240, 365, 0.4] divided by 4 and [7.5, 60, 91.25, 0.1]', () => {
    const divideBy4 = [30, 240, 365, 0.4];
    const results2 = map(divideBy4, num => num / 4);
    assert.deepEqual(results2, [7.5, 60, 91.25, 0.1]);
  });
  it('returns true for full capitalizations of ["this", "is", "sparta!"]', () => {
    const stopYellingPlease = ['this', 'is', 'sparta!'];
    const results3 = map(stopYellingPlease, char => char.toUpperCase());
    assert.deepEqual(results3, ['THIS', 'IS', 'SPARTA!']);
  });
});


// Student Over-ambitious Scenario 3

// Too complicated to factor with MoChai.

// However, given enough time, one could use a loop to iterate
// the complete list of possible encoded cases to compare each
// case against the original unencrypted message.

// Cipher outputs a scrambled message with a randomized degree of shifts (to the right or from A to Z)
const caesarCipher = secretMessage => {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let scrambledEggs = '';
  const shiftL = Math.ceil(Math.random() * 26); // Random number of shifts
  for (const ele of secretMessage.split('')) {
    for (let i = 0; i < 26; i++) {
      if (ele === alpha[i]) {
        scrambledEggs += alpha[i + shiftL - Math.floor((i + shiftL) / 26) * 26];
        break;
      }
      if (i === 25) {
        scrambledEggs += ele;
      }
    }
  }
  return scrambledEggs.split('');
};

// Dicipher outputs a single character according to a given degree of shift
const charDicipher = (singleChar, shiftDegree) => {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < 26; i++) {
    if (singleChar === alpha[i]) {
      return alpha[i + shiftDegree - Math.floor((i + shiftDegree) / 26) * 26];
    }
    if (i === 25) {
      return singleChar;
    }
  }
};

// Dicipher outputs a complete list of all possible shifting cases for the encoded message
const caesarDicipher = scrambledCode => {
  let list = {};
  for (let i = 0; i < 26; i++) {
    let message = map(scrambledCode, char => charDicipher(char, i)).join('');
    if (i < 10) {
      list['00' + i] = message;
    } else {
      list['0' + i] = message;
    }
  }
  return list;
};

console.log(caesarDicipher(caesarCipher('i came, i saw, i conquered')));