var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Storage = require('./../Storage');

// TODO ==========
//  -

//var storage = new Storage();
describe('Testing Storage module - in memory db.', function() {
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
    it('addData should return a uuid string', function() {
      var storage = new Storage();
      var name = "thename";
      var text = "thetext";
      var done = false;
      var uuid = storage.addData(name, text, done);
     // expect(storage.addData("thename","thetext")).to.contain("thename");
      expect(uuid).to.be.a('string');
    });

    it('addData should create new object so count is bigger', function() {
      var storage = new Storage();
      var beforeadd = storage.countData();
      var name = "thename";
      var text = "thetext";
      var done = false;
      storage.addData(name, text, done);
     // expect(storage.addData("thename","thetext")).to.contain("thename");
      expect(storage.countData()).to.equal(beforeadd+1);
    });

    it('addData passing it name, text and done values should create new object so count is bigger, and done on object should be true', function() {
      var storage = new Storage();
      var beforeadd = storage.countData();
      var name = "thename";
      var text = "thetext";
      var done = true;
      var uuid = storage.addData(name,text,done);
      expect(storage.countData()).to.equal(beforeadd+1);
      var record = storage.getData(uuid);
      expect(record.done).to.equal(true);
    });

    it('add data should cope with names with spaces', function() {
      var storage = new Storage();
      var storage2 = new Storage();
      var beforeadd = storage.countData();
      expect(function(){storage2.addData("thename2","thetext2",false);}).to.not.throw(Error);
      expect(storage2.countData()).to.equal(beforeadd+1);
      //expect object to be returned.
    });

    it('addData should throw error if at least 2 fields not provided (name and text)', function() {
      var storage = new Storage();
      var beforeadd = storage.countData();
      var name = "thename";
      var text = "thetext";
      var done = false;
      expect(function(){storage.addData(name);}).to.throw(Error, /Todo must contain at least/);
      expect(function(){storage.addData(name,done);}).to.throw(Error, /Todo must contain at least/);
      expect(function(){storage.addData(text,done);}).to.throw(Error, /Todo must contain at least/);
      expect(function(){storage.addData(done, name);}).to.throw(Error, /Todo must contain at least/);
     // expect(storage.addData("thename","thetext")).to.contain("thename");
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

    it('Two storage objects should be different objects', function() {
      //var storage = new Storage();
      var storage2 = new Storage();
      var storage3 = new Storage();
      storage2.addData("thename2","thetext2", false);
      storage2.addData("thename3","thetext2", false);
      expect(storage2.countData()).to.not.equal(storage3.countData());
     // expect(storage.countData()).to.equal(beforeadd+1);
    });

// not valid with move to uuid
/*
    it('Adding entry with same name should return error', function() {
      //var storage = new Storage();
      var storageadddup = new Storage();
      storageadddup.addData("thename","thetext");

      expect(function(){storageadddup.addData("thename","thetext222");}).to.throw(Error, /Database already contains record for/);

    });
*/
  });

// update not needed for tutorial, and must change to be id based

  describe('updateData.', function() {
    it('updateData should return an Error when updating a record that doesnt exist', function() {
      var storageupdate = new Storage();
      var uuid = storageupdate.addData("aname","some text", false);
      var diffuuid = '12345';
  //    console.log("in test, diffuuid = " + diffuuid);
      expect(function(){ storageupdate.updateData(diffuuid, "diffname", "someothertext", false)}).to.throw(Error, /Database does not contain record for name/);
    });

    it('updateData should update an existing record', function() {
      var storageupdate = new Storage();
      var name = "samename";
      var origtext = "some text";
      var newtext = "the new text";
      var uuid = storageupdate.addData(name,origtext, false);
      expect(storageupdate.getData(uuid).text).to.equal(origtext);
      storageupdate.updateData(uuid, name, newtext, false);
      expect(storageupdate.getData(uuid).text).to.equal(newtext);
    });
  });


  describe('deleteData.', function() {

    it('deleteData should remove record so count is down by 1', function() {
      var storage = new Storage();
      var name = "thename";
      var text = "thetext";
      var uuid = storage.addData(name, text);
      expect(storage.countData()).to.equal(1);
      storage.deleteData(uuid);
      expect(storage.countData()).to.equal(0);
    });

    it('deleteData should mean getdata for record throws error', function() {
      var storage = new Storage();
      var name = "thename";
      var text = "thetext";
      var uuid = storage.addData(name, text);
      expect(storage.countData()).to.equal(1);
      storage.deleteData(uuid);
      expect(function(){ storage.getData(uuid);}).to.throw(Error, /Database does not contain record for/);
    });
  });
});
