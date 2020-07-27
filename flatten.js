


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

module.exports = flatten;


// console.log(flatten([1, [2, 3, 4], 5, [6]]))