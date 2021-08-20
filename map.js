const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === 0) {
    return true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
        return true;
      }
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`💯 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Compass Scenario
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// Scenario 1
const divideBy4 = [30, 240, 365, 0.4];
const results2 = map(divideBy4, num => num / 4);
assertArraysEqual(results2, [7.5, 60, 91.25, 0.1]);

// Scenario 2
const stopYellingPlease = ['this', 'is', 'sparta!'];
const results3 = map(stopYellingPlease, char => char.toUpperCase());
assertArraysEqual(results3, ['THIS', 'IS', 'SPARTA!']);

// Scenario 3
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