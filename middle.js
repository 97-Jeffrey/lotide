function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    //console.log('The passed-in arrays are absolutely equal to each other');
    return 'The passed-in arrays are absolutely equal to each other';
  } else {
    //console.log('The passed-in arrays are not equal to each other')
    return  'The passed-in arrays are not equal to each other'
  }
}


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

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]))
