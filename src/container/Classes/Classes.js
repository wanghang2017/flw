import React from "react";
import {Link} from "react-router-dom";
import "./Classes.less";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import {connect} from "react-redux";
@connect(state=>({...state.cart}))
export default class Classes extends React.Component{
    render(){
      console.log(this.props);
      return (
          <div>
              <Header hasBack={true} hasSearch={false} title="分类"/>
              <div className="classes-container">
                  <ul className="classes-box">
                      <li>
                          <Link to="/lists/0">
                              <em className="iconfont icon-shouji" style={{color:"#ff6040"}}></em>
                              <p>手机、智能硬件</p>
                              <p>手机/手机配件/时尚...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/1">
                              <em className="iconfont icon-qitaleidiannao" style={{color:"#9fff9e"}}></em>
                              <p>电脑、平板</p>
                              <p>台式机/平板电脑/平...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/2">
                              <em className="iconfont icon-erji" style={{color:"orange"}}></em>
                              <p>外设、办公、酷新奇</p>
                              <p>外设产品/办公设备/...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/3">
                              <em className="iconfont icon-mian-dianshi" style={{color:"#388fff"}}></em>
                              <p>家用电器</p>
                              <p>大家电/生活电器/个...</p>
                          </Link>
                      </li>
                  </ul>
              </div>
              <Tab productList={this.props.productList}/>
          </div>
        )
    }
}