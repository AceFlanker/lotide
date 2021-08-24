const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) === true) {
    if (actual.length !== expected.length) {
      console.log(`👎 Assertion Failed: ${actual} != ${expected}`);
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

module.exports = assertEqual;