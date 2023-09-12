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
var sum = 10;
const promiseA = new Promise(function (resolve, reject) {
  // thực thi các tác vụ bất đồng bộ(call api)
  setTimeout(function () {
    if (sum > 10) {
      reject("fail");
    }

    resolve("pass");
  }, 2000);
});

const promiseB = function (param) {
  return new Promise(function (relsove, reject) {
    // thực thi code bất đồng bộ
    setTimeout(function () {
      if (param === "fail") {
        reject("test fail");
      }

      relsove("test pass");
    }, 1000);
  });
};

// đối tượng promise cung cấp 2 phương thức : then và catch.
// Khi promise chạy thành công: trả kết quả ở then.
// Khi promise chạy thất bại: trả lỗi vào catch
// promise chain
promiseA
  .then(function (response) {
    console.log("response: ", response);

    return promiseB(response);
  })
  .then(function (res) {
    // kết quả của promiseB
    console.log("res", res);
  })
  .catch(function (err) {
    console.log("err", err);
  });

axios({
  url: "https://6500588418c34dee0cd4bf27.mockapi.io/products",
  method: "GET",
})
  .then(function (res) {
    console.log("res", res.data);
  })
  .catch(function (err) {
    console.log("err", err);
  });
