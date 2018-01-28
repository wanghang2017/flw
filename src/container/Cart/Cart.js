import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom"
import "./Cart.less";
export default class Cart extends React.Component{
    render(){
        return (
            <div>
                <Header hasBack={true} hasSearch={false} title="购物车"/>
                <div className="cart-container">
                    <em className="iconfont icon-gouwuche"></em>
                    <p>您的购物车内还没有任何商品</p>
                  <Link to="/"><button>返回首页</button></Link>
                </div>
            </div>
        )
    }
}