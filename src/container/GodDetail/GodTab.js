import React from "react";
import {Link} from "react-router-dom";
export default class GodTab extends React.Component{
    render(){
      return (
        <div className="godDetail-tab">
          <ul className="godDetail-nav-box">
            <li><span>加入购物车</span></li>
            <li><Link to="/cart"><em className="iconfont icon-gouwuche"></em><span>购物车</span></Link></li>
          </ul>
        </div>
      )
    }
}