// tail and Dependency Functions Imports
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// tail Test Codes
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

const words1 = [];
assertEqual(tail(words1), []);
assertArraysEqual(tail(words1), []);

const words2 = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words2), ["Heavyhouse", "Labs"]);
assertArraysEqual(tail(words2), ["Heavyhouse", "Labs"]);

const words3 = [];
assertEqual(tail(words3), [``]);
assertArraysEqual(tail(words3), [``]);