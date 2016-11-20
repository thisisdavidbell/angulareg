var Storage = require('./Storage');
var storage = new Storage();

console.log("START");
console.log(storage.getAllData());

console.log("\nADD 1");
var uuid1 = storage.addData("thename","thetext", false);
console.log(storage.getAllData());

console.log("\n ADD 2");
var uuid2 = storage.addData("thename2","thetext2", false);
console.log(storage.getAllData());

console.log("\n ADD 3 include done=true");
storage.addData("thename3","thetext3", true);
console.log(storage.getAllData());

try {
  console.log("\n ADD 1 AGAIN - should now pass - dups allowed with uuids");
  storage.addData("thename","thetext",false);
  console.log(storage.getAllData());
} catch (err) {
   console.log("Correctly caught error");
}

console.log("\n update 2");
storage.updateData(uuid2, "thename2","new text", false);
console.log(storage.getAllData());

console.log("\n delete 1");
storage.deleteData(uuid1);
console.log(storage.getAllData());
