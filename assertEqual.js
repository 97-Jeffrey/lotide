const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual === expected)
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    console.assert(true, actual !== expected)
  };
};



module.exports = assertEqual;
