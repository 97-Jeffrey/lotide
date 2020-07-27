


// this is the callback function:
const getLength = function (item) {
  return item[0];
}

//this is the recieving function:
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = {
  getLength: getLength,
  map: map
}

//test with assertArrayEqual:
// console.log(assertArraysEqual(map(words, getLength),['g','c','t','m','t']));
// console.log(map(words, getLength));