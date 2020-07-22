const  assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    // console.log('The passed-in arrays are absolutely equal to each other')
    return '✅✅✅ The passed-in arrays are absolutely equal to each other';
  } else {
    // console.log('The passed-in arrays are not equal to each other')
    return '🛑🛑🛑 The passed-in arrays are not equal to each other';
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    let letterArray = [];
    for (let each = 0; each < sentence.length; each++) {
      if (sentence[each] === letter) {
        letterArray.push(each);
      }
    }
    results[letter] = letterArray;
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));

console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]));
