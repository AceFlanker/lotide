// Dependency Function Import
const eqArrays = require('./eqArrays');

// Function Definition
const assertArraysEqual = function(actual, expected) {
  const logPass = function(input1, input2) {
    console.log(`💯 Assertion Passed: ${input1} === ${input2}`);
  };
  const logFail = function(input1, input2) {
    console.log(`👎 Assertion Failed: ${input1} !== ${input2}`);
  };
  eqArrays(actual, expected) ? logPass(actual, expected) : logFail(actual, expected);
};

module.exports = assertArraysEqual;

// Test Codes
assertArraysEqual([3, 4], [4, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 1, 2, 2], [1, 1, 2, 2]);
assertArraysEqual(['Initialized'], ['initialized']);
assertArraysEqual(['hell', 'no'], ['hell','no', 'way']);
assertArraysEqual(['hello', 'world'], ['hello', 'world']);