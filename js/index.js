

// getAPI san pham
(function GetAllProduct(){
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });
    promise.then(function(res){
        console.log(res.data.content);
        renderProduct(res.data.content);
    })
    promise.catch(function(err){
        console.log(err);
    })
})();

function renderProduct(arrProduct){
let content = '';
for (let i = 0; arrProduct.length;i++){
    content += `
    <div class="item col-lg-4 col-md-4 col-sm-4">
            <div class="background">
              <div class="img-product">
                <img src="${arrProduct[i].image}" alt="">
              </div>
              <div class="content-text">
                <h5>Adidas Prophere</h5>
                <p>${arrProduct[i].description.length >100 ?arrProduct[i].description.substr(0,100)+'...' :arrProduct[i].description}</p>
              </div>
              <div class="button">
                <a href="./detail.html"><button class="buynow"><span>Buy Now</span></button></a>
                <div class="price"><span>${arrProduct[i].price}</span></div>
              </div>
            </div>
          </div>
    `;
    document.querySelector('#list-product').innerHTML = content;
}
}