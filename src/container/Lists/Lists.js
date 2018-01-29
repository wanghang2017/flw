import React from "react";
import Header from "../../components/Header/Header";
import "./Lists.less";
import {connect} from "react-redux";
import actions from "../../store/actions/products";
import {Link} from "react-router-dom";
@connect(state=>({...state}),actions)
export default class Lists extends React.Component{
    componentWillMount(){
      let title = "商品列表";
      let type = this.props.match.params.type;
      switch (type) {
        case "hot":
          title="热门商品";
          break;
        case "cheap":
          title="特价专区";
          break;
      }
      this.title=title;
      this.props.setProducts(type);
      switch (type) {
        case "0":
          type="phone";
          break;
        case "1":
          type="computer";
          break;
        case "2":
          type="earphone";
          break;
        case "3":
          type="household";
          break;
      }
      this.myType = type;
      //todo 获取详情，如果state里面没有则重新加载
    }
    //todo  点击排序 重新从后台加载数据
  //todo 懒加载  滑动到一定距离加载再加载数据
    render(){
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title={this.title}/>
              <div className="sortHeader">
                <ul >
                  <li><span>销量</span><em></em></li>
                  <li><span>价格</span><em></em></li>
                  <li><span>评论</span><em></em></li>
                </ul>
              </div>
                <div className="lists-container">
                    <ul className="lists-box">
                      {this.props.products[this.myType].map((item,index)=>(
                        <Link to={{pathname:`/godDetail/${item.productId}`,state:item}} key={index}>
                          <li className="lists-item" >
                            <img src={item.productImg}/>
                            <p>{item.productTitle}</p>
                            <p><span>￥{item.productPrice}</span><em className="iconfont icon-gouwuche"></em></p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                </div>
            </div>
        )
    }
}