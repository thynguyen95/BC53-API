function renderProductsList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    var contentTr = `
        <tr>
            <td>${product.id}</td>
            <td>${product.tenSP}</td>
            <td>${product.giaSP}</td>
            <td>
                <img src="${product.hinhAnh}" alt="" width="300" height="150" />
            </td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-warning" onclick="editProduct(${product.id})">Sửa</button>
                <button class="btn btn-danger" onclick="delProduct(${product.id})">Xóa</button>
            </td>
        </tr>
        `;

    content += contentTr;
  }

  //in danh sách ra giao diện.
  document.querySelector("#tblDanhSachSP").innerHTML = content;
}

function getInfor() {
  var id = document.querySelector("#maSP").value;
  var tenSP = document.querySelector("#TenSP").value;
  var giaSP = document.querySelector("#GiaSP").value;
  var hinhAnh = document.querySelector("#HinhSP").value;
  var moTa = document.querySelector("#loaiSP").value;

  return new Product(id, tenSP, giaSP, hinhAnh, moTa);
}

function onLoading() {
  document.querySelector("#spinner").style.display = "flex";
}

function offLoading() {
  document.querySelector("#spinner").style.display = "none";
}
