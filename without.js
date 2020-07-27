
function without(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}
module.exports = without;




// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]))

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); 

// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"])

