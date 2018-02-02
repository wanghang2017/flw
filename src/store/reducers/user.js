import * as Types from "../actionTypes";
let user = (state={login:{},reg:{}},actions)=>{
  switch (actions.type){
    case Types.GET_USER:
      return {...state,login:{...actions.payload}};
    case Types.SET_USER:
      return {...state,reg:{...actions.payload}};
    case Types.CLEAR_REG:
      return {...state,reg:{}};
    case Types.CLEAR_LOGIN:
      return {...state,login:{}};
    case Types.UPDATE_NEW_CART:
      return {...state,login:{...state.login,user:{...actions.payload}}}
  }
  return state;
};
export default user;