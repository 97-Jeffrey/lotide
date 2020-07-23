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
    //console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    //console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
    return `🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`;
  }
}


const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item) === false) {
      result.push(item)
    } else {
      break;
    }
  }
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']));
