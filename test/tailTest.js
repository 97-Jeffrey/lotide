const tail = require('../tail');
const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');


describe('#tail',()=>{
  it('length of word should equal 3 when ["Yo Yo", "Lighthouse", "Labs"]',()=>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });

  it('length of words should equal 4 ["what", "is", "going", "on"]', ()=>{
    const words = ["what", "is", "going", "on"];
    tail(words);
    assert.equal(words.length,4);
  })
});