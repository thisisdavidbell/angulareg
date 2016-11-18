var Storage = require('./Storage');
var storage = new Storage();

console.log(storage.getAllData());

storage.addData("thename","thetext");
console.log(storage.getAllData());

storage.addData("thename2","thetext2");
console.log(storage.getAllData());
