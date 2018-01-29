import React from "react";
import Header from "../../components/Header/Header";
import "./Lists.less";
export default class Lists extends React.Component{
    componentWillMount(){

    }
    render(){
      let title = "商品列表";
      switch (this.props.match.params.type) {
        case "hot":
          title="热门商品";
          break;
        case "cheap":
          title="特价专区";
          break;
      }
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title={title}/>
              <div className="sortHeader">
                <ul >
                  <li><span>销量</span><em></em></li>
                  <li><span>价格</span><em></em></li>
                  <li><span>评论</span><em></em></li>
                </ul>
              </div>
                <div className="lists-container">
                    <ul className="lists-box">
                        <li className="lists-item">
                          <img src="http://localhost:9000/img/products/phone.jpg"/>
                          <p>小米（MI）MIX2 6GB+64GB 移动联通电信4G手机 全网通 双卡双待</p>
                          <p><span>￥1000</span><em className="iconfont icon-gouwuche"></em></p>
                        </li>
                      <li className="lists-item">
                        <img src="http://localhost:9000/img/products/phone.jpg"/>
                        <p>小米（MI）MIX2 6GB+64GB 移动联通电信4G手机 全网通 双卡双待</p>
                        <p><span>￥1000</span><em className="iconfont icon-gouwuche"></em></p>
                      </li>
                    </ul>
                </div>
            </div>
        )
    }
}