const assertEqual = function (actual, expected) {
  if (actual === expected) {
    // console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual === expected);
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    // console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    console.assert(true, actual !== expected);
    return `🛑🛑🛑Assertion failed: ${actual} !== ${expected}`

  };
};


const countLetters = function (str) {
  let output = {};
  for (let letter of str) {
    if(letter ===' '){
      continue;
    }
    output[letter] = 0;
    for (let each of str) {
      if (each === letter) {
        output[letter]++;
      }
    }
  }
  return output;
}

let result = countLetters('what is going on');
 console.log(result);
//  console.log(assertEqual(result['a'],3))
//  console.log(assertEqual(result['b'],4))