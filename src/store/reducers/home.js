import * as Types from "../actionTypes";


//只需要一次，以后可以一直用
let homeHot = (state={phone:[],earPhone:[],computer:[],household:[]},actions)=>{
  switch (actions.type){
    case Types.SET_HOME_HOT:
      return {...actions.payload};
    case Types.UPDATE_HOME_HOT:
      console.log(actions.payload,"aaaaa");
      return {...actions.payload};
  }
  return state;
};

export default homeHot;