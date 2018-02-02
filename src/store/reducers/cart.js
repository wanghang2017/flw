import * as Types from "../actionTypes";

let initState={
  productList:[
    {
      count:0,
      product:{}
    }
  ],
};
function cart(state=initState,action) {
  switch (action.type){
    case Types.CART_PRODUCTLIST:
      return {productList:[...action.payload]};
    case Types.CART_ADD:
      state.productList[action.index].count++;
      return {productList:[...state.productList]};
    case Types.CART_MINUS:
      state.productList[action.index].count--;
      return {productList:[...state.productList]};
    case Types.UPDATE_CART:
      return {...state};
    case Types.CART_ADD_PRODUCT:
      let obj={product:action.item,count:1};

      return {productList:[...state.productList,obj]}
  }
  return state;
}

export default cart;