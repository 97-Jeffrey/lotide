
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

module.exports = letterPositions;



// console.log(letterPositions('lighthouse in the house'));

// console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]));
