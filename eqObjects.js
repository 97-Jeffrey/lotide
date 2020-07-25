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
    if (!Array.isArray(object1[key]) && typeof (object1[key]) === 'object' && !Array.isArray(object2[key]) && typeof (object2[key]) === 'object') {
      return eqObjects(object1[key], object2[key]);
    }
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



//primitive type test:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba)); // =>true
console.log(eqObjects(ab, abc)); // =>false
assertEqual(eqObjects(ab, ba), true);  //=> passed
assertEqual(eqObjects(ab, abc), false); //=> passed



//reference type test: [Array]
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, dc));  //=>true
console.log(eqObjects(cd, cd2));  //=>false
assertEqual(eqObjects(cd, dc), true); //=>passed
assertEqual(eqObjects(cd, cd2), false); //=>passed



//reference type test: {object}
console.log(eqObjects({ b: 2, a: { z: 3 }}, { a: { z: 3 }, b: 2 }));//=>true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); //=>false
assertEqual(eqObjects({ b: 2, a: { z: 3 }}, { a: { z: 3 }, b: 2 }),true); //=>passed
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); //=>passed
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);//=>passed