import * as Types from "../actionTypes";
let products = (state={phone:[],computer:[],earphone:[],household:[],hot:[],cheap:[]},action)=>{
  switch (action.type){
    case Types.HOT:
      state[action.type]=[...action.payload];
      return {...state};
    case Types.CHEAP:
      state[action.type]=[...action.payload];
      return {...state};
    case Types.PHONE:
      state[action.type]=[...action.payload];
      return {...state};
    case Types.EARPHONE:
      state[action.type]=[...action.payload];
      return {...state};
    case Types.COMPUTER:
      state[action.type]=[...action.payload];
      return {...state};
    case Types.HOUSEHOLD:
      state[action.type]=[...action.payload];
      return {...state};
  }
  return state;
};

export default products;