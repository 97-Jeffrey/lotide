
const eqArrays = require('./eqArrays');


function assertArraysEqual(arr1, arr2) {
  if(eqArrays(arr1,arr2)){
    // console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }else{
    // console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
    return `🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`;
  }
}
module.exports = assertArraysEqual;

