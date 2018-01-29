import {getProducts} from "../../API/index";
import * as Types from "../actionTypes";
let setProducts=(myType)=>{
  let type;
  switch (myType){
    case "0":
      type=Types.PHONE;
      break;
    case "1":
      type=Types.COMPUTER;
      break;
    case "2":
      type=Types.EARPHONE;
      break;
    case "3":
      type=Types.HOUSEHOLD;
      break;
    case "hot":
      type=Types.HOT;
      break;
    case "cheap":
      type=Types.CHEAP;
      break;
  }
  return (dispatch,getState)=>{
    dispatch({type,payload:getProducts(myType)});
  }
};

export default {setProducts};