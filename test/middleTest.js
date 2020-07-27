const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]))