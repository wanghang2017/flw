import {getOneProduct} from "../../API/index";
import * as Types from "../actionTypes";
let setProduct = (id)=>{
  return (dispatch,getState)=>{
    dispatch({type:Types.SET_PRODUCT,payload:getOneProduct(id)});
  }
};
export default {setProduct};