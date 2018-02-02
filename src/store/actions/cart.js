import {getCartProductList,updateCartProduct} from "../../API/index";
import * as Types from "../actionTypes";
function setCartProductList(id) {
  return function (dispatch,getState) {
    dispatch({
      type:Types.CART_PRODUCTLIST,
      payload:getCartProductList(id)
    })
  }
}
function cartCountAdd(index) {
  return {
    type:Types.CART_ADD,
    index
  }
}
function cartCountMinus(index) {
  return {
    type:Types.CART_MINUS,
    index
  }
}
function cartUpdate(data) {
  return function (dispatch,getSatte) {
    dispatch({
      type:Types.UPDATE_CART,
      payload:updateCartProduct(data)
    })
  }
}
let addProduct = (item)=>{
  return (dispatch,getState)=>{
    dispatch({
      type:Types.CART_ADD_PRODUCT,
      item
    });
  }
};


export default {
  setCartProductList,
  cartCountAdd,
  cartCountMinus,
  cartUpdate,
  addProduct
}
