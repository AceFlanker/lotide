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