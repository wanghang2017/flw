import React from "react";
import {NavLink as Link} from "react-router-dom";
import "./Tab.less";
export default class Tab extends React.Component{
    render(){
        return (
            <div className="tab-container">
             <ul className="tab-nav-box">
               <li><Link to="/home">首页</Link></li>
               <li><Link to="/classes">分类</Link></li>
               <li><Link to="/cart">购物车</Link></li>
               <li><Link to="/profile">个人中心</Link></li>
             </ul>
            </div>
        )
    }
}
