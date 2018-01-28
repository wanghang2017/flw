import {getSliders} from "../../API/index";
import * as Types from "../actionTypes";
let setSliders = ()=>{
  return ()=>{
    return {
      type:Types.SET_SLIDERS,
      payload:getSliders()
    }
  }
};