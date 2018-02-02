import React from 'react';
import './CartExist.less';
export default class CartExist extends React.Component{
  render(){
    return (<div className="cart-container">
      <ul>
        {[1,2,3,4].map((item,index)=>{
          return <li  className="shopInfo" key={index}>
            <div className="list_chk">
              <span></span>
            </div>
            <div className="list_con">
              <div className="con_img">
                < img src="../../../mock/img/products/computer.jpg" alt=""/>
              </div>
              <div className="amount_box cl">
                <a className="add">-</ a>
                <input type="text" className="sum" value={1}/>
                <a className="remove">+</ a>
              </div>
            </div>
            <div className="list_info">
              <div className="list_text">重低音头戴式 带麦话筒 超大耳罩 音质清晰 酷炫灯光</div>
              <p className="price">￥444</p >
            </div>
          </li>
        })}
      </ul>
    </div>)
  }
}