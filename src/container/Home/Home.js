import React from "react";
import {NavLink as Link} from "react-router-dom";
import "./Home.less";
import HomeSlider from "./HomeSlider";
import HotProducts from "./HotProducts";
export default class Home extends React.Component{
    render(){
        return (
            <div className="home-container">
                <HomeSlider/>
             <nav className="home-nav-box">
                 <Link to="/lists/hot"><em className="iconfont icon-remen" style={{backgroundColor:"#63cdff"}}></em><span>热门商品</span></Link>
                 <Link to="/lists/cheap"><em className="iconfont icon-tejia" style={{backgroundColor:"#2dffdf"}}></em><span>特价专区</span></Link>
                 <Link to="/lists/0"><em className="iconfont icon-icon--" style={{backgroundColor:"#ff4c4c"}}></em><span>手机专场</span></Link>
                 <Link to="/blank"><em className="iconfont icon-dingdan" style={{backgroundColor:"#ffa223"}}></em><span>我的订单</span></Link>
                 <Link to="/blank"><em className="iconfont icon-fuwuzhongxin" style={{backgroundColor:"#ff209f"}}></em><span>服务中心</span></Link>
                 <Link to="/blank"><em className="iconfont icon-pingce" style={{backgroundColor:"#536dff"}}></em><span>F评测</span></Link>
                 <Link to="/blank"><em className="iconfont icon-shoujichongzhixian" style={{backgroundColor:"red"}}></em><span>手机充值</span></Link>
                 <Link to="/blank"><em className="iconfont icon-remen" style={{backgroundColor:"#ff5a17"}}></em><span>企业团购</span></Link>
             </nav>
                <HotProducts/>
            </div>
        )
    }
}