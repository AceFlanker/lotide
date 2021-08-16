// TAIL FUNCTION IMPLEMENTATION
const tail = (arr) => {
  return arr.slice(1);
};
                                                                                                                                 
// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) === true) {
    if (actual.length !== expected.length) {
      console.log(`👎 Assertion Failed: ${actual} != ${expected} - unequal lengths`);
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

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words), ["Lighthouse", "Labs"]); 