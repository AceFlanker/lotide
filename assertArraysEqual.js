// Dependency Import
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const logPass = function (input1, input2) {
    console.log(`💯 Assertion Passed: ${input1} === ${input2}`);
  }
  const logFail = function (input1, input2) {
    console.log(`👎 Assertion Failed: ${input1} !== ${input2}`);
  } 
  eqArrays(actual, expected) ? logPass(actual, expected) : logFail(actual, expected);
};

module.exports = assertArraysEqual;
