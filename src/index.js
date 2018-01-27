import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import Cart from "./container/Cart/Cart";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./container/Home/Home";
import Classes from "./container/Classes/Classes";
import Profile from "./container/Profile/Profile";
import "./common/coommon.less";
ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/classes" component={Classes}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/" component={Home}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById("root"));