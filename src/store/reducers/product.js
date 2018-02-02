import * as Types from "../actionTypes";
let initState={

};
let product = (state=initState,action)=>{
  switch (action.type){
    case Types.SET_PRODUCT:
      console.log(action.payload);
      return {...action.payload}
  }
  return state;
};
export default product;