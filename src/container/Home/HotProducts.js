import React from "react";
import {Link} from "react-router-dom";
export default class HotProducts extends React.Component{
  constructor(){
    super();
  }
    render(){
      return (
            <div className="home-hot-container">
             <span>- {this.props.title} -</span>
              <ul className="home-hot-imgBox">
                {this.props.products.map((item,index)=>(
                  <li key={index}>
                    <Link to={{pathname:`/godDetail/${item.productId}`,state:item}}>
                      <img src={item.productImg}/>
                      <p>{item.productTitle}</p>
                      <p>{item.productInfo}</p>
                      <p>￥{item.productPrice}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        )
    }
}