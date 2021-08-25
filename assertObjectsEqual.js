// Dependency Function Import
const eqObjects = require('./eqObjects');

// Function Definition
const assertObjectsEqual = function(actual, expected) {
  const logPass = function(actual, expected) {
    console.log(`💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  };
  const logFail = function(actual, expected) {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? logPass(actual, expected) : logFail(actual, expected);
};

module.exports = assertObjectsEqual;

// Test Codes
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
