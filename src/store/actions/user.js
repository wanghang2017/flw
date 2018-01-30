import {login,reg} from "../../API/index";
import * as Types from "../actionTypes";

//注册
let setUser = (user)=>{
  console.log(user,"setUser");
  return (dispatch,getState)=>{
    dispatch({type:Types.SET_USER,payload:reg(user)});
  }
};
//登陆
let getUser = (user)=>{
  return (dispatch,getState)=>{
    dispatch({type:Types.GET_USER,payload:login(user)});
  }
};
export default {setUser,getUser};