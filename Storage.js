module.exports = Storage;

  // this would be a shared object for all 'instances' of Storage
  var db = {};

function Storage() {

  // these are specific to this instance.
  this.db = {};
}

   Storage.prototype.getAllData = function () {
    return this.db;

  }

    Storage.prototype.getData = function (name) {
    return this.db[name];

  }

  Storage.prototype.addData = function (name,text) {
    //Check record doesnt exist
    if (this.db[name] != null) {
      throw new Error("Database already contains record for name:" + name);
    } else {
      this.db[name] = {};
      this.db[name].text = text;
      this.db[name].done = false;
      return this.db[name];
    }
  }

  Storage.prototype.updateData = function (name,text) {
    if (this.db[name] == null) {
 //     console.log ("about to throw an error");
      throw new Error("Database does not contain record for name: " + name );
    } else {
//        console.log ("didnt detect null");
      console.log(this.db[name].text);
      this.db[name].text = text;
      console.log(this.db[name].text);
//      this.db[name].done = false;
      return this.db[name];
    }
  }

  Storage.prototype.deleteData = function (name) {
    return {};
  }

  Storage.prototype.countData = function () {
    var size = 0, key;
    for (key in this.db) {
        size++;
    }
    return size;
  }
