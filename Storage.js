module.exports = function Storage() {

  var astring = "imthestring";
  var db = {};

  Storage.prototype.getalldata = function () {
    console.log(astring);
    return db;

  }

    Storage.prototype.getdata = function (name) {
    return db[name];

  }

  Storage.prototype.adddata = function (name,text) {
    //object should contain name and text
    db[name] = text;
    return name;
  }

  Storage.prototype.updatedata = function () {
    return {};
  }

  Storage.prototype.deletedata = function () {
    return {};
  }

  Storage.prototype.countdata = function () {
    var size = 0, key;
    for (key in db) {
        size++;
    }
    return size;
  }

}