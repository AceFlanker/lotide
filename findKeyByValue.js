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

const findKeyByValue = function(inputObj, propValue) {
  let keyName = undefined;
  for (const key in inputObj) {
    if (inputObj[key] === propValue) {
      keyName = key;
    }
  }
  return keyName;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);