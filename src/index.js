import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./container/App";
import Cart from "./container/Cart/Cart";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./container/Home/Home";
import Classes from "./container/Classes/Classes";
import Profile from "./container/Profile/Profile";
import "./common/coommon.less";
import ProDetail from "./container/ProDetail/ProDetail";
import Lists from "./container/Lists/Lists";
import GodDetail from "./container/GodDetail/GodDetail";
import Reg from "./container/Reg/Reg";
import Login from "./container/Login/Login";
import Blank from "./container/Blank/Blank";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/classes" component={Classes}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/proDetail" component={ProDetail}/>
          <Route path="/lists/:type" component={Lists}/>
          <Route path="/godDetail" component={GodDetail}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/login" component={Login}/>
          <Route path="/blank" component={Blank}/>
          <Route path="/" component={Home}/>
        </Switch>
      </App>
    </Router>
  </Provider>

  ,document.getElementById("root"));