import {login,reg,getNewCart} from "../../API/index";
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


//退出登陆
let clearLogin = ()=>{
  return {
    type:Types.CLEAR_LOGIN
  }
};
//清空注册
let clearReg = ()=>{
  return{
    type:Types.CLEAR_REG
  }
};

let updateNewCart = (userId)=>{
  return ()=>{
    return {
      type:Types.UPDATE_NEW_CART,
      payload:getNewCart(userId)
    }
  }
};


export default {setUser,getUser,clearLogin,clearReg};