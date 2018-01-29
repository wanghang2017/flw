import {getHomeHot,updateHomeHot} from "../../API/index";
import * as Types from "../actionTypes";
let setHomeHot = ()=>{
  return (dispatch,getState)=>{
    dispatch({type:Types.SET_HOME_HOT,payload:getHomeHot()});
  }
};
let updateSetHomeHot = ()=>{
  return (dispatch,getState)=>{
    console.log(getState(),"hahaah");
    dispatch({type:Types.UPDATE_HOME_HOT,payload:updateHomeHot()});
  }
};
export default {setHomeHot,updateSetHomeHot};