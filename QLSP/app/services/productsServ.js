const BASE_URL = "https://6500588418c34dee0cd4bf27.mockapi.io/products";

function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",

    // những cặp key-value khai báo bên trong object params sẽ được gửi lên url theo định dạng
    // example.com/products?key1=value1&key2=value2
    params: {
      tenSP: name || undefined,
    },
  });
}

function delProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}

function addNewProduct(sp) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: sp,
  });
}

function getProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}

function updateProductByID(id, sp) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: sp,
  });
}

//cách 2:

// var productsServ = {
//   getProduct: function () {
//     return axios({
//       url: BASE_URL,
//       method: "GET",
//     });
//   },
//   delProductByID: function (id) {
//     return axios({
//       url: `${BASE_URL}/${id}`,
//       method: "DELETE",
//     });
//   },
// };
