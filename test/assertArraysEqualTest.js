// assertArraysEqual Function Import
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual Test Codes
assertArraysEqual([3, 4], [4, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 1, 2, 2], [1, 1, 2, 2]);
assertArraysEqual(['Initialized'], ['initialized']);
assertArraysEqual(['hell', 'no'], ['hell','no', 'way']);
assertArraysEqual(['hello', 'world'], ['hello', 'world']);
