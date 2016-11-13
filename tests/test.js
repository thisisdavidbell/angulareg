var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Storage = require('./../Storage');

var storage = new Storage();

describe('getalldata', function() {
  it('getalldata should return an empty array when called first', function() {
    //var storage = new Storage();
    expect(storage.getalldata()).to.be.empty;
  });
});

describe('countdata', function() {
  it('countdata should return 0 when called first', function() {
    //var storage = new Storage();
    expect(storage.countdata()).to.equal(0);
  });
});

describe('adddata', function() {
  it('adddata should create new object and return name', function() {
    //var storage = new Storage();
    var beforeadd = storage.countdata();
    expect(storage.adddata("thename","thetext")).to.equal("thename");
    expect(storage.countdata()).to.equal(beforeadd+1);
  });
});

