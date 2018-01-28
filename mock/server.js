let express = require("express");
let bodyParser = require("body-parser");
let util = require("./util.js");
let app = express();
app.listen(9000);
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回   发请求体的都会发一个options试探一下*/
  else  next();
});
app.use(function (req,res,next) {
  util.getData("./data/product.json",(data)=>{
    req.productData = data;
    req.productPhone = data.filter(item=>item.productClass=="phone");
    req.productHousehold = data.filter(item=>item.productClass=="household");
    req.productEarPhone = data.filter(item=>item.productClass=="earPhone");
    req.productComputer = data.filter(item=>item.productClass=="computer");
    next();
  },res);
});
app.use(function (req,res,next) {
  util.getData("./data/sliders.json",(data)=>{
    // console.log(data);
    req.slidersData = data;
    next();
  },res);
});
app.use(function (req,res,next) {
  util.getData("./data/user.json",(data)=>{
    // console.log(data);
    req.userData = data;
    next();
  },res);
});
//获取某一个商品的详情信息{
//    productId:1,productTitle:"小米（MI）MIX2 6GB+64GB 移动联通电信4G手机 全网通 双卡双待",
//    productInfo:"该商品支持分期购买",
//    productImg:"http://localhost:9000/img/products/phone.jpg",
//    productPrice:1000,
//    productHot:1000,
//    productQuality:100,
//    productClass:{
//      levelOne:0,
//      levelTwo:0,
//    },
// }
app.get("/product/:id",function (req,res) {
  let id = req.params.id;
  let product = req.productData.find(item=>item.productId==id);
  res.json(product);
});

//获取商品列表（offset,limit,hasmore） 返回:
//{
//    hasMore:
//    lists:[]
// }
app.get('/products/:offset/:limit/:productClass',function (req,res) {
  console.log(req.params);
  res.json(req.productData);
});
//用户登陆
app.get('/login',function (req,res) {
  res.send(req.userData);
});
//用户注册:
app.post('/reg',function (req,res) {

});
//修改用户信息


//获取购物车信息
app.get('/getCar',function (req,res) {

});
//购物车添加商品



//购物车删除商品



//获取轮播图信息
app.get('/sliders',function (req,res) {
  res.json(req.slidersData);
});


//获取首页商品列表  {"phone":[],"computer":[],"household":[],"earPhone":[]}
app.get('/homeHot',function (req,res) {
  let obj = {};
  let phone=[...req.productPhone];
  let earPhone=[...req.productEarPhone];
  let computer=[...req.productComputer];
  let household=[...req.productHousehold];
  phone=phone.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  earPhone=earPhone.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  computer=computer.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  household=household.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  obj={phone,earPhone,computer,household};
  res.json(obj)
});