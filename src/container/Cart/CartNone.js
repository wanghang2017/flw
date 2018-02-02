import React from "react";
import {Link} from "react-router-dom"
export default class CartNone extends React.Component{
  render(){
    return (
      <div className="cart-container">
        <div className="cartNone">
          <em className="iconfont icon-gouwuche"></em>
          <p>您的购物车内还没有任何商品</p >
          <Link to="/"><button>返回首页</button></Link>
        </div>

      </div>
    )
  }
}