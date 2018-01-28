import React from "react";
export default class HotProducts extends React.Component{
  constructor(){
    super();

  }
    render(){
        return (
            <div className="home-hot-container">
             <span>- 手机 -</span>
              <ul className="home-hot-imgBox">
                <li>
                  <img src="http://localhost:9000/img/products/phone.jpg"/>
                  <p>小米手机</p>
                  <p>为发烧而生</p>
                  <p>￥1000</p>
                </li>
                <li>
                  <img src="http://localhost:9000/img/products/phone.jpg"/>

                  <p>小米手机</p>
                  <p>为发烧而生</p>
                  <p>￥1000</p>
                </li>
                <li>
                  <img src="http://localhost:9000/img/products/phone.jpg"/>

                  <p>小米手机</p>
                  <p>为发烧而生</p>
                  <p>￥1000</p>
                </li>
              </ul>
            </div>
        )
    }
}