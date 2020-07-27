const middle = require('../middle');
const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');



describe('#middle', () => {

  it('return [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('return [] for [1,2]',()=>{
    assert.deepEqual(middle([1,2]),[]);
  });
  it('return 3 for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('return [5,6] for [1,2,3,4,5,6,7,8,9,10]', ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]);
  });
  
});