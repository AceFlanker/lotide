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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === ' ') {
      continue;
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house').n, [12]);
