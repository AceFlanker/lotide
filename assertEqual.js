// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('💯 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('👎 Assertion Failed: ' + actual + ' != ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Common Sense", "Common Sense");
assertEqual(1, 1);
assertEqual(32, -32);