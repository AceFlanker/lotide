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
  // assertEqual: assertEqual,
  // assertArraysEqual: assertArraysEqual,
  // assertObjectsEqual: assertObjectsEqual,

  eqArrays: eqArrays,
  eqObjects: eqObjects,
  
  flatten: flatten,

  without: without,

  head: head,
  tail: tail,
  middle: middle,

  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,

  findKeyByValue: findKeyByValue,
  findKey: findKey,

  map: map,

  takeUntil: takeUntil,
};