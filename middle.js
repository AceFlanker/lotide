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

const middle = function(inputArr) {
  const findMid = function(arr) {
    const halfLength = Math.floor(arr.length / 2);
    if (arr.length < 3) {
      return undefined;
    } else if (arr.length % 2 === 0) {
      return [halfLength - 1, halfLength];
    } else {
      return [halfLength];
    }
  };
  let midArr = [];
  const outputMid = function(arr) {
    if (findMid(arr)) {
      findMid(arr).forEach(index => {
        midArr.push(arr[index]);
      });
    }
  };
  outputMid(inputArr);
  return midArr;
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);