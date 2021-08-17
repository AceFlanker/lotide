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

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`💯 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
};

const without = function(source, toBeRemoved) {
  let newArr = source.slice();
  for (let i = 0 ; i < newArr.length; i++) {
    toBeRemoved.forEach(element => {
      if (newArr[i] === element) {
        newArr.splice(i, 1);
        i--;
      }
    })
  }
  return newArr;
}

console.log(without(['1', 2, 3], ['1', 2]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);