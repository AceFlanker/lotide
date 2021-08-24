// tail and Dependency Functions Imports
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns true for ["Yo Yo", "Lighthouse", "Labs] and ["Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it('returns true for [] and []', () => {
    const words1 = [];
    assert.deepEqual(tail(words1), []);
  });
  it('returns false for ["Yo Yo", "Lighthouse", "Labs"] and ["Heavyhouse", "Labs"]', () => {
    const words2 = ["Yo Yo", "Lighthouse", "Labs"];
    assert.notDeepEqual(tail(words2), ["Heavyhouse", "Labs"]);
  });
  it('returns false for [] and [""]', () => {
    const words3 = [];
    assert.notDeepEqual(tail(words3), [``]);
  });
});


// // tail Test Codes
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words), ["Lighthouse", "Labs"]);
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

// const words1 = [];
// assertEqual(tail(words1), []);
// assertArraysEqual(tail(words1), []);

// const words2 = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words2), ["Heavyhouse", "Labs"]);
// assertArraysEqual(tail(words2), ["Heavyhouse", "Labs"]);

// const words3 = [];
// assertEqual(tail(words3), [``]);
// assertArraysEqual(tail(words3), [``]);