//const uuid = require('uuid');
//var uuid = require('node-uuid');

module.exports = Storage;

  var db = {}; // this is the shared object for all uses of this 'instance' of Storage
  const uuid_generator = require('uuid');

  function Storage() {

  // these are specific to this instance.
    this.db = {};
    //console.log(uuid());
  }

  Storage.prototype.getAllData = function () {
    return this.db;

  }

  Storage.prototype.getData = function (uuid) {
    if (this.db[uuid] == null) {
      throw new Error("Database does not contain record for uuid:" + uuid);
    } else {
      return this.db[uuid];
    }
  }

  Storage.prototype.addData = function (name,text,done) {
      var uuid = uuid_generator();
      this.db[uuid] = {};
      this.db[uuid].name = name;
      this.db[uuid].text = text;
      if (done != null) {
        this.db[uuid].done = done;
      } else {
        this.db[uuid].done = false;
      }
      return uuid;
  }

  Storage.prototype.updateData = function (uuid,name,text,done) {
    console.log("The uuid to lookup: " + uuid);
    if (this.db[uuid] == null) {
 //     console.log ("about to throw an error");
      throw new Error("Database does not contain record for name: " + name );
    } else {
      this.db[uuid].name = name;
      this.db[uuid].text = text;
      this.db[uuid].done = done;
      return this.db[uuid];
    }
  }

  Storage.prototype.deleteData = function (uuid) {
   if (this.db[uuid] == null) {
 //     console.log ("about to throw an error");
      throw new Error("Database does not contain record for uuid: " + uuid );
    } else {
      delete this.db[uuid];
    }
  }

  Storage.prototype.countData = function () {
    var size = 0, key;
    for (key in this.db) {
        size++;
    }
    return size;
  }
