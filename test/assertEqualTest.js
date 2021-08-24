const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

// assertEqual Test Codes
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Common Sense", "Common Sense");
assertEqual(1, 1);
assertEqual(32, -32);

// head Test Codes
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Darkness", "My", "Old", "Friend"]), "Darkness");

// tail Test Codes
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words), ["Lighthouse", "Labs"]);

const words1 = [];
tail(words1); // no need to capture the return value since we are not checking it
assertEqual(tail(words1), []);

const words2 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(tail(words), ["Heavyhouse", "Labs"]);

const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(tail(words3), [``]);

// esArrays Test Code
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), true);