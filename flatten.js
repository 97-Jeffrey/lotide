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
    console.log('The passed-in arrays are absolutely equal to each other')
  } else {
    console.log('The passed-in arrays are not equal to each other')
  }
}


function flatten(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr1.push(arr[i])
    } else if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        arr1.push(arr[i][j]);
      }
    }
  }
  return arr1;
}

console.log(flatten([1, [2, 3, 4], 5, [6]]))