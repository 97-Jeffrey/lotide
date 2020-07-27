


function middle(array) {
  let output = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  else if (array.length % 2 !== 0) {
    output.push(array[Math.floor(array.length / 2)])
  }
  else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);
    output.push(array[(array.length / 2)])
  }

  return output;
};



module.exports = middle;

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle(' 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]))
