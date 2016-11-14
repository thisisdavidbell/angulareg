var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Storage = require('./../Storage');

var storage = new Storage();

describe('getAllData', function() {
  it('getallData should return an empty array when called first', function() {
    //var storage = new Storage();
    expect(storage.getAllData()).to.be.empty;
  });
});

describe('countData', function() {
  it('countData should return 0 when called first', function() {
    //var storage = new Storage();
    expect(storage.countData()).to.equal(0);
  });
});

describe('addData', function() {
  it('addData should create new object and return name', function() {
    //var storage = new Storage();
    var beforeadd = storage.countData();
    expect(storage.addData("thename","thetext")).to.equal("thename");
    expect(storage.countData()).to.equal(beforeadd+1);
  });
});

describe('addData', function() {
  it('Two storage objects should be different objects', function() {
    //var storage = new Storage();
    var storage2 = new Storage();
    var storage3 = new Storage();
    storage2.addData("thename2","thetext2");
        storage2.addData("thename3","thetext2");
        console.log("2" + storage2.countData());
            console.log("3" + storage3.countData());
    expect(storage2.countData()).to.not.equal(storage3.countData());
   // expect(storage.countData()).to.equal(beforeadd+1);
  });
});


