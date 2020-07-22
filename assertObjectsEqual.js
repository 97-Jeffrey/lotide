const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual === expected)
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
    console.assert(true, actual !== expected)
  };
};


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


const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let key of arr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
   
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual,expected)){
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  }else if(!eqObjects(actual,expected)){
    return`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(ab,ba));
console.log(assertObjectsEqual(ab,abc));
console.log(assertObjectsEqual(cd,dc));
console.log(assertObjectsEqual(cd,cd2));