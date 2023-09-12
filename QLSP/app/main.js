function fetchProductsList() {
  onLoading();
  axios({
    url: "https://6500588418c34dee0cd4bf27.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      console.log("res", res.data);
      renderProductsList(res.data);
      offLoading();
    })
    .catch(function (err) {
      offLoading();
      console.log("err", err);
    });
}

fetchProductsList();

//xóa SP
function delProduct(id) {
  axios({
    url: `https://6500588418c34dee0cd4bf27.mockapi.io/products/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      // gọi lại api lấy lại tất cả sp trên server về sau khi xóa thành công để render ra ds mới nhất
      fetchProductsList();
      console.log("sản phẩm bị xóa", res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

//Thêm sản phẩm
function addProduct() {
  var sp = getInfor();
  console.log("sp: ", sp);

  axios({
    url: "https://6500588418c34dee0cd4bf27.mockapi.io/products",
    method: "POST",
    data: sp,
  })
    .then(function (res) {
      console.log("res", res);
      //   tắt modal của bs sau khi thêm thành công

      // document.getElementById('myModal')
      $("#myModal").modal("hide");

      //lấy danh sách sp mới nhất từ server
      fetchProductsList();
    })
    .catch(function (err) {
      console.log(err);
    });
}
