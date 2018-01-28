import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
import "./Header.less";
@withRouter
export default class Header extends React.Component{
    static propsTypes={
      title:PropTypes.string,
      hasBack:PropTypes.bool,
      hasSearch:PropTypes.bool
    };
    handleClick=()=>{
      this.props.history.goBack();
    };
    render(){
        return (
            <div className="header-container">
              {this.props.hasBack?<em className="iconfont icon-fanhui" onClick={this.handleClick}></em>:null}
                <span>{this.props.title}</span>
              {this.props.hasSearch?<em className="header-search"></em>:null}
            </div>
        )
    }
}