const words = ["ground", "control", "to", "major", "tom"];


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
  if(eqArrays(arr1,arr2)){
    //console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`
  }else{
    // console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`)
    return `🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`
  }
}


// this is the callback function:
const getLength = function(item){
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

//test with assertArrayEqual:
console.log(assertArraysEqual(map(words, getLength),['g','c','t','m','t']));





console.log(map(words, getLength));