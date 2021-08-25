# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aceflanker/lotide`

**Require it:**

`const _ = require('@aceflanker/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(array1, array2)`: Returns true for two identical arrays, false otherwise.
* `eqObjects(object1, object2)`: Returns true for two identical objects, false otherwise.
* `flatten(array1)`: Returns a new array with elements of children arrays (one level deep) expanded into the outer array in addition to all other elements of non-objects in the outer array.
* `without(source, unwantedElements)`: Returns a new array from an argument array with elements removed per the other argument array provided.
* `head(array1)`: Returns a new array with the element at index 0 of the argument array.
* `tail(array1)`: Returns a new array with all other elements than the one at index 0 in the argument array.
* `middle(array1)`: Returns a new array with the element or elements at the halway index or indices in an array of an odd or of an even number of elements, respectively.
* `countOnly(array1, elementsToCount)`: Returns an object with keys representing the elements needed to account for and values representing their number of occurrences in an array.
* `countLetters(string1))`: Returns an object with keys representing the characters and values representing their number of occurrences in a string.
* `letterPositions(string1)`: Returns an object with keys representing the characters and values, as  arrays of numbers representing their indices in a string.
* `findKeyByValue(object1, wantedProperty)`: Return true a key in an object, if the key contains the  value specified in the corresponding argument, false otherwise.
* `findKey(object1, callBackFunction)`: Returns the first key whose value matches that specified in the callback function.
* `map(array1, callBackFunction)`: Returns a new array with results given by a function called back on the arugment array.
* `takeUntil(array1, callBackFunction)`: Returns a portion of an array as new, starting from the first element to a latter one as specified by the callback function.