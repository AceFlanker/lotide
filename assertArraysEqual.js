const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`💯 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;

assertArraysEqual([3, 4], [4, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual(['hello', 'world'], ['hello', 'world']);
