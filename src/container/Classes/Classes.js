import React from "react";
import {Link} from "react-router-dom";
import "./Classes.less";
import Header from "../../components/Header/Header";
export default class Classes extends React.Component{
    render(){
        return (
          <div>
              <Header hasBack={true} hasSearch={false} title="分类"/>
              <div className="classes-container">
                  <ul className="classes-box">
                      <li>
                          <Link to="/lists/0">
                              <em></em>
                              <p>手机、智能硬件</p>
                              <p>手机/手机配件/时尚...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/1">
                              <em></em>
                              <p>电脑、平板</p>
                              <p>台式机/平板电脑/平...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/2">
                              <em></em>
                              <p>外设、办公、酷新奇</p>
                              <p>外设产品/办公设备/...</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="/lists/3">
                              <em></em>
                              <p>家用电器</p>
                              <p>大家电/生活电器/个...</p>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
        )
    }
}