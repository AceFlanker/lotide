// assertEqual was already modified on Day 1 practice to compare arrays
const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) === true) {
    if (actual.length !== expected.length) {
      console.log(`👎 Assertion Failed: ${actual} != ${expected} - unequal lengths`);
    } else if (actual.length === 0) {
      console.log(`💯 Assertion Passed: [] === []`);
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
          break;
        }
        if (actual[actual.length - 1] === expected[actual.length - 1]) {
          console.log(`💯 Assertion Passed: ${actual} === ${expected}`);
        }
      }
    }
  } else {
    if (actual === expected) {
      console.log(`💯 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), true);