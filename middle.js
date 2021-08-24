const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;