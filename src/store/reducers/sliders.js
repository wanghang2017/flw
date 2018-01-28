import * as Types from "../actionTypes";


//只需要一次，以后可以一直用
let sliders = (state=[],actions)=>{
  switch (actions.type){
    case Types.SET_SLIDERS:
      return [...actions.payload];
  }
  return state;
};