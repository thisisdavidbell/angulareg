var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Storage = require('./../Storage');

//var storage = new Storage();

describe('getAllData', function() {
  it('getallData should return an empty array when called first', function() {
    var storage = new Storage();
    expect(storage.getAllData()).to.be.empty;
  });
});

describe('countData', function() {
  it('countData should return 0 when called first', function() {
    var storage = new Storage();
    expect(storage.countData()).to.equal(0);
  });
});

describe('addData', function() {
  it('addData should create new object so count is bigger', function() {
    var storage = new Storage();
    var beforeadd = storage.countData();
    var name = "thename";
    var text = "thetext";
    storage.addData("thename","thetext");
   // expect(storage.addData("thename","thetext")).to.contain("thename");
    expect(storage.countData()).to.equal(beforeadd+1);
  });
});

describe('addData', function() {
  it('addData passing it name, text and done values should create new object so count is bigger, and done on object should be true', function() {
    var storage = new Storage();
    var beforeadd = storage.countData();
    var name = "thename";
    var text = "thetext";
    var done = true;
    var record = storage.addData(name,text,done);
   // expect(storage.addData("thename","thetext")).to.contain("thename");
    expect(storage.countData()).to.equal(beforeadd+1);
    expect(record.done).to.equal(true);
  });
});

describe('addData', function() {
  it('add data should cope with names with spaces', function() {
    var storage = new Storage();
    var storage2 = new Storage();
    var beforeadd = storage.countData();    
    expect(function(){storage2.addData("thename2","thetext2");}).to.not.throw(Error);
    expect(storage2.countData()).to.equal(beforeadd+1);
    //expect object to be returned.
  });
});


/*
describe('addData', function() {
  it('addData should return new object', function() {
    //var storage = new Storage();
    var beforeadd = storage.countData();
    var name = "thename";
    var text = "thetext";
    storage.addData("thename","thetext");
   // expect(storage.addData("thename","thetext")).to.contain("thename");
    expect(storage.countData()).to.equal(beforeadd+1);
  });
});
*/


describe('addData', function() {
  it('Two storage objects should be different objects', function() {
    //var storage = new Storage();
    var storage2 = new Storage();
    var storage3 = new Storage();
    storage2.addData("thename2","thetext2");
    storage2.addData("thename3","thetext2");
    expect(storage2.countData()).to.not.equal(storage3.countData());
   // expect(storage.countData()).to.equal(beforeadd+1);
  });
});

describe('addData', function() {
  it('Adding entry with same name should return error', function() {
    //var storage = new Storage();
    var storageadddup = new Storage();
    storageadddup.addData("thename","thetext");

    expect(function(){storageadddup.addData("thename","thetext222");}).to.throw(Error, /Database already contains record for/);

  });
});

describe('updateData', function() {
  it('updateData should return an Error when updating a record that doesnt exist', function() {
    var storageupdate = new Storage();
    storageupdate.addData("aname","some text");
    expect(function(){ storageupdate.updateData("diffname", "someothertext")}).to.throw(Error, /Database does not contain record for name/);
  });
});

describe('updateData', function() {
  it('updateData should update an existing record', function() {
    var storageupdate = new Storage();
    var name = "samename";
    var origtext = "some text";
    var newtext = "the new text";
    storageupdate.addData(name,origtext);
    expect(storageupdate.getData(name).text).to.equal(origtext);
    storageupdate.updateData(name, newtext);
    expect(storageupdate.getData(name).text).to.equal(newtext);
  });
});

describe('deleteData', function() {
  it('deleteData should mean getdata for record throws error', function() {
    var storage = new Storage();
    var name = "thename";
    var text = "thetext";
    storage.addData(name, text);
    expect(storage.countData()).to.equal(1);
    storage.deleteData("thename");
    expect(function(){ storage.getData("thename");}).to.throw(Error, /Database does not contain record for name/);
  });
});

describe('deleteData', function() {
  it('deleteData should remove record so count is down by 1', function() {
    var storage = new Storage();
    var name = "thename";
    var text = "thetext";
    storage.addData(name, text);
    expect(storage.countData()).to.equal(1);
    storage.deleteData("thename");
    expect(storage.countData()).to.equal(0);
  });
});

