import React from "react";
import PropTypes from "prop-types";
import {withRouter,Link} from "react-router-dom"
import "./Header.less";
@withRouter
export default class Header extends React.Component{
    static propsTypes={
      title:PropTypes.string.isRequired,
      hasBack:PropTypes.bool.isRequired,
      hasSearch:PropTypes.bool.isRequired
    };
    handleClick=()=>{
      this.props.history.push("/home");
    };
    render(){
        return (
            <div className="header-container">
              {this.props.hasBack?<em className="iconfont icon-fanhui" onClick={this.handleClick}></em>:null}
                <span>{this.props.title}</span>
              {this.props.hasSearch?<Link to="/reg">注册</Link>:null}
            </div>
        )
    }
}