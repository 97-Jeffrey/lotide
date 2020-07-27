const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual === expected)
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    console.assert(true, actual !== expected)
  };
};

const tail = function (arr) {
  let arr1 = arr.slice(1);
  return arr1;
};





const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!