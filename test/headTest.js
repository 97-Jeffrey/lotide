const head = require('../head').head;
const assert = require('chai').assert;
// const assertEqual = require('../head').assertEqual;


describe('#head',()=>{
  it('return 1 for [1,2,3', ()=>{
    assert.strictEqual(head([1,2,3]),1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it('return 5 for [5,6,7]',()=>{
    assert.strictEqual(head([5,6,7]),5);
  });
  it('return "hello" from ["hello"]', ()=>{
    assert.strictEqual(head(['hello']),'hello');
  })
});
