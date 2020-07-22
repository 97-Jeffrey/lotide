const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual === expected)
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    console.assert(true, actual !== expected)
  };
};


const findKeyByValue = function (givenObject, givenValue) {

  let array = Object.keys(givenObject);
  let theKey;
  for (let each of array) {
    if (givenObject[each] === givenValue) {
      theKey = each;
    }
  }
  return theKey;
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);