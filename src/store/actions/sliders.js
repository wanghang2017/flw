import {getSliders} from "../../API/index";
import * as Types from "../actionTypes";
let setSliders = ()=>{
  return (dispatch,getState)=>{
    dispatch({type:Types.SET_SLIDERS,payload:getSliders()});
  }
};

export default {setSliders};