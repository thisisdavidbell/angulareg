module.exports = Storage;

  // this would be a shared object for all 'instances' of Storage
  var db = {};

function Storage() {

  // these are specific to this instance.
  this.astring = "imthestring";
  this.db = {};
}

   Storage.prototype.getAllData = function () {
    console.log(this.astring);
    return this.db;

  }

    Storage.prototype.getData = function (name) {
    return this.db[name];

  }

  Storage.prototype.addData = function (name,text) {
    //object should contain name and text
    this.db[name] = text;
    return name;
  }

  Storage.prototype.updateData = function () {
    return {};
  }

  Storage.prototype.deleteData = function () {
    return {};
  }

  Storage.prototype.countData = function () {
    var size = 0, key;
    for (key in this.db) {
        size++;
    }
    return size;
  }
