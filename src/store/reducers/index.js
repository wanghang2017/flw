import sliders from "./sliders";
import homeHot from "./home";
import products from "./products";
import user from "./user";
import {combineReducers} from "redux"



export default combineReducers({
  sliders,
  homeHot,
  products,
  user
});