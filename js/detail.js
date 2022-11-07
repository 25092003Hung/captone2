(function getProduct() {
  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("magiay"));
  var magiay = urlParams.get("magiay");

  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${magiay}`,
    method: "GET",
    ResponseType: "JSON",
  });

  promise.then(function(res){
    console.log(res.data.content);
    var product = res.data.content;
    document.querySelector("#product-image").src = product.image;
    document.querySelector("#product-name").innerHTML = product.name;
    document.querySelector("#product-description").innerHTML = product.description;
    document.querySelector("#product-size").innerHTML = product.size;
    document.querySelector("#product-price").innerHTML = product.price + "$";
  });

  promise.catch(function (err) {
    console.log(err);
  });
})();

(function GetAllProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponseType: "JSON",

    });
    promise.then(function (res) {
      console.log(res.data.content);
      renderProduct(res.data.content);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  })();

function renderProduct(arrProduct) {
  let content = "";
  for (let i = 0; arrProduct.length; i++) {
    var item = arrProduct[i];
    content += `
        <div class="col-xl-4 col-md-4 col-xs-12 text-center product-realate">
            <img class="w-auto" src="${item.image}" alt="" style="object-fit: cover" height="300px">
            <p>${item.name}</p>
            <div>
            <button class="btn btn-warning px-5 py-2">Buy now</button>
            <button class="btn btn-light px-5 py-2">${item.price}$</button>
            </div>
        </div>
        `;
    document.querySelector("#product__realate").innerHTML = content;
  }
}

