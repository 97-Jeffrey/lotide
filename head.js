const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}

function head(arr) {
  return arr.shift();
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), "Hello");