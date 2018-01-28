import {createStore} from "redux";
import reducer from "./reducers/index";
import {applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise";

let store = applyMiddleware(reduxLogger,reduxThunk,reduxPromise)(createStore)(reducer);
window._store = store;
export default store;