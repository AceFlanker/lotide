const assertEqual = function(actual, expected) {
  const logPass = function (input1, input2) {
    console.log(`💯 Assertion Passed: ${input1} === ${input2}`);
  }
  const logFail = function (input1, input2) {
    console.log(`👎 Assertion Failed: ${input1} !== ${input2}`);
  } 
  if (Array.isArray(actual) === true) {
    if (actual.length !== expected.length) {
      logFail(actual, expected);
    } else if (actual.length === 0) {
      logPass(actual, expected);
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          logFail(actual, expected);
          break;
        }
        if (i === actual.length - 1) {
          logPass(actual, expected);
        }
      }
    }
  } else {
    if (actual === expected) {
      logPass(actual, expected);
    } else {
      logFail(actual, expected);
    }
  }
};

module.exports = assertEqual;
