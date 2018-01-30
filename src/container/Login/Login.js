import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/user";
import "./Login.less";
@connect(state=>({...state.user}),actions)
export default class Login extends React.Component{
  handleClick=()=>{
    let obj ={};
    obj.username=this.usn.value;
    obj.password = this.psw.value;
    this.props.getUser(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps.login.success);
    if(newProps.login.success&&(newProps.login.success.length>0)){
      this.props.history.push("/profile");
    }
  }
    render(){
      console.log(this.props);
      return (
            <div>
                <Header hasBack={true} hasSearch={true} title="登陆"/>
                <div className="login-container">
                  <ul>
                    <li>
                      <label htmlFor="username">用户名</label>
                      <input type="text" id="username" ref={x=>this.usn=x}/>
                    </li>
                    <li>
                      <label htmlFor="password">密码</label>
                      <input type="text" id="password" ref={x=>this.psw = x}/>
                    </li>
                    <li>

                      <Link to={'/reg'}>前往注册</Link>
                      <i>忘记密码</i>
                    </li>
                    <li>
                    </li>
                    <li>
                      <button onClick={this.handleClick}>登录</button>
                    </li>
                  </ul>
                </div>
            </div>
        )
    }
}