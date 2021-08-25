// Dependency Function Import
const assert = require('chai').assert;

// Function Definition
const flatten = function(inputArr) {
  let newArr = [];
  const arrayInsert = function(oldArr, modArr) {
    oldArr.forEach((arrEle) => {
      modArr.push(arrEle);
    });
  };
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

module.exports = flatten;

// Test Codes
describe('#flatten', () => {
  it('returns true for [1, 2, [3, 4], 5, [6]]) and [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns true for [1, 2, 3] and [1, 3, 3]', () => {
    assert.deepEqual(flatten([[1, 2], ['3', 4], 5, '6', [7, '8'], 9]), [1, 2, '3', 4, 5, '6', 7, '8', 9]);
  });
});