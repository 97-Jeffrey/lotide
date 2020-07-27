
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

module.exports = countLetters;


// let result = countLetters('what is going on');
//  console.log(result);
//  console.log(assertEqual(result['a'],3))
//  console.log(assertEqual(result['b'],4))