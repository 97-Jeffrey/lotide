const assertEqual = require('./assertEqual');

function head(arr) {
  return arr.shift();
}

module.exports = {
  head: head,
  assertEqual: assertEqual
};