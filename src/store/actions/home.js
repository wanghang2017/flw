import {getHomeHot} from "../../API/index";
import * as Types from "../actionTypes";
let setHomeHot = ()=>{
  return (dispatch,getState)=>{
    dispatch({type:Types.SET_HOME_HOT,payload:getHomeHot()});
  }
};
export default {setHomeHot};