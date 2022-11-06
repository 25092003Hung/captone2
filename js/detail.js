window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('productid');
  console.log('params', myParam);
}
  //call api load lên giao diện
(function getProduct(){
  var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=1',
    method: 'GET',
    ResponseType: 'JSON',
  });

  promise.then(function(res){
    console.log(res.data.content);
  })

  promise.catch(function(err){
    console.log(err)
  })
})();
