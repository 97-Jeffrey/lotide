
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
    // console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }else{
    // console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
    return `🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`;
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
