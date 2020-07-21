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


function without(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"])