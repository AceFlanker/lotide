// const assertEqual = require('./assertEqual');
// const assertArraysEqual = require('./assertArraysEqual');
// const assertObjectsEqual = require('./assertObjectsEqual');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const flatten = require('./flatten');

const without = require('./without');

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');

const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');

const map = require('./map');

const takeUntil = require('./takeUntil');

module.exports = {
  // assertEqual,
  // assertArraysEqual,
  // assertObjectsEqual: assertObjectsEqual,

  eqArrays,
  eqObjects,
  
  flatten,
  
  without,
  
  head,
  tail,
  middle,
  
  countOnly,
  countLetters,
  letterPositions,
  
  findKeyByValue,
  findKey,
  
  map,
  
  takeUntil,
};