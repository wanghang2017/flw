let creator = function () {
  let ary = [];
  for (let i = 0; i<100; i++) {
    let obj = {};
    obj.productId=i;
    obj.isHot = i%2===0?true:false;
    obj.isCheap= i%3===0?true:false;
    obj.productHot=Math.round(Math.random()*(1500-500)+500);
    obj.productQuality = Math.round(Math.random()*100);
    let productClass =Math.round(Math.random()*3);
    switch (productClass){
      case 0:
        obj.productTitle="小米（MI）MIX2 6GB+64GB 移动联通电信4G手机 全网通 双卡双待";
        obj.productInfo="该商品支持分期购买";
        obj.productImg="http://localhost:9000/img/products/phone.jpg";
        obj.productPrice=Math.round(Math.random()*(2000-500)+500);
        obj.productClass="phone";
        break;
      case 1:
        obj.productTitle="E-3LUE/宜博 EHS937 眼镜蛇电竞游戏耳机（黑色）";
        obj.productInfo="重低音 头戴式 带麦话筒 超大耳罩 音质清晰 酷炫灯光";
        obj.productImg="http://localhost:9000/img/products/earphone.jpg";
        obj.productPrice=Math.round(Math.random()*500);
        obj.productClass="earPhone";
        break;
      case 2:
        obj.productTitle="联想（ThinkPad）E470-20H1A01LCD轻薄商务办公家用 14英寸笔记本 i5-6200U 4G 500 G920M 2G独显卡Win10（黑色）";
        obj.productInfo="高效办公 调整载入";
        obj.productImg="http://localhost:9000/img/products/computer.jpg";
        obj.productPrice=Math.round(Math.random()*(10000-3000)+3000);
        obj.productClass="computer";
        break;
      case 3:
        obj.productTitle="夏普(SHARP) KC-BB30-W1 升级款净化器除甲醛雾霾 加湿型空气净化器";
        obj.productInfo="BB30升级款 四层滤网，强力集尘 该商品支持分期付款";
        obj.productImg="http://localhost:9000/img/products/computer.jpg";
        obj.productPrice=Math.round(Math.random()*(1000-500)+500);
        obj.productClass="household";
        break;
    }
    ary.push(obj);
  }
  return ary;
};

console.log(creator());


