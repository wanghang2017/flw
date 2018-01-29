import React from "react";
import Header from "../../components/Header/Header";
import "./GodDetail.less";
import GodTab from "./GodTab";
export default class GodDetail extends React.Component{
    componentWillMount(){
        if(!this.props.location.state){

        }
    }
    render(){
      let state = this.props.location.state;
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title="商品详情页"/>
                <div className="godDetail-container">
                   {/* <img src="http://localhost:9000/img/products/phone.jpg"/>
                    <p>小米</p>
                    <p>为发烧而生</p>
                    <p><span>特惠价格:</span> <span>￥1000</span></p>
                    <p><span>送货至 : </span><span> 北京市回龙观</span></p>*/}
                    <img src={state.productImg}/>
                    <p>{state.productTitle}</p>
                    <p>{state.productInfo}</p>
                    <p><span>特惠价格:</span> <span>￥{state.productPrice}</span></p>
                    <p><span>送货至 : </span><span> 北京市回龙观</span></p>
                </div>
                <GodTab/>
            </div>
        )
    }
}