import * as Types from "../actionTypes";
let user = (state={login:{},reg:{}},actions)=>{
  switch (actions.type){
    case Types.GET_USER:
      return {...state,login:{...actions.payload}};
    case Types.SET_USER:
      return {...state,reg:{...actions.payload}};
  }
  return state;
};
export default user;