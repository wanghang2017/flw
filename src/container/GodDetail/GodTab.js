import React from "react";
import {Link} from "react-router-dom";
export default class GodTab extends React.Component{
  componentWillUpdate(newProps){
    if(newProps.productList.length>0){
      this.mycount = newProps.productList.reduce((prev,next)=>{
        return prev+next.count;
      },0);
    }
  }
  componentWillMount(){
    if(this.props.productList.length>0){
      this.mycount = this.props.productList.reduce((prev,next)=>{
        return prev+next.count;
      },0);
      console.log(this.mycount);
    }
  }
    render(){
      return (
        <div className="godDetail-tab">
          <ul className="godDetail-nav-box">
            <li><span onClick={this.props.add}>加入购物车</span></li>
            <li><Link to="/cart"><em className="iconfont icon-gouwuche"></em><span>购物车({this.mycount})</span></Link></li>
          </ul>
        </div>
      )
    }
}