import React from "react";
import {NavLink as Link} from "react-router-dom";
import {connect} from "react-redux";
import "./Home.less";
import HomeSlider from "./HomeSlider";
import HotProducts from "./HotProducts";
import actions from "../../store/actions/sliders";
import home from "../../store/actions/home";
import * as utils from "../../common/util";
import Tab from "../../components/Tab/Tab";
@connect(state=>({sliders:[...state.sliders],homeHot:{...state.homeHot},...state.user}),{...actions,...home})
export default class Home extends React.Component{
  constructor(){
    super();
    this.state={
      top:0,
    }
  }
  setTop=(top)=>{
    this.setState({top},function () {
      this.x.transition="";
    });
  };
  update=()=>{
    this.props.updateSetHomeHot();
  };
  componentDidMount(){
    if(this.props.sliders.length<=0){
      console.log(1);
      this.props.setSliders();
    }
    if(this.props.homeHot.phone.length<=0){
      this.props.setHomeHot();
    }
    utils.pullRefresh(this.x,this.setTop,this.update);
  }
    render(){
      console.log(this.props);
      let {homeHot} =this.props;
      return (
            <div className="home-container" ref = {x=>this.x=x} style={{top:`${this.state.top}px`}}>
                <HomeSlider sliders={this.props.sliders}/>
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
              <div className="home-allproducts">
                {Object.keys(homeHot).map((item,index)=>(
                  <HotProducts title={item} key={index} products={homeHot[item]}/>
                ))}
              </div>
              <div className="home-pullrefresh">
                {this.state.top<=100?"下拉可以刷新":"释放立即刷新"}
              </div>
              <Tab count={this.props.login}/>
            </div>
        )
    }
}