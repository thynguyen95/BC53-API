// Bất đồng bộ
// event loop

console.log("a");

setTimeout(function () {
  console.log("b");
}, 3000);

console.log("c");

setTimeout(function () {
  console.log("d");
}, 1000);

console.log("e");

//promise: sẽ giải quyết vấn đề callback hell
// promise sẽ có 3 trạng thái: pending, relsove, reject.
const promiseA = new Promise(function (resolve, reject) {});
