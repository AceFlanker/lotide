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

const arrayInsert = function(oldArr, modArr) {
  oldArr.forEach((arrEle) => {
    modArr.push(arrEle);
  });
};

const flatten = function(inputArr) {
  let newArr = [];
  for (const ele of inputArr) {
    if (Array.isArray(ele)) {
      arrayInsert(ele, newArr);
    } else {
      newArr.push(ele);
    }
  }
  return newArr;
};

// SPREAD ... VERSION
// const flatten = function(inputArr) {
//   let newArr = [];
//   for (const ele of inputArr) {
//     if (Array.isArray(ele)) {
//       newArr.push(...ele);
//     } else {
//       newArr.push(ele);
//     }
//   }
//   return newArr;
// }

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], ['3', 4], 5, '6', [7, '8'], 9]), [1, 2, '3', 4, 5, '6', 7, '8', 9]);