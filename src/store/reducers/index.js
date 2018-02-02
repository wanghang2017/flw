import sliders from "./sliders";
import homeHot from "./home";
import products from "./products";
import user from "./user";
import cart from "./cart";
import product from "./product";
import {combineReducers} from "redux"



export default combineReducers({
  sliders,
  homeHot,
  products,
  user,
  cart,
  product
});