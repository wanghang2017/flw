import React from "react";
import Header from "../../components/Header/Header";
import {connect} from "react-redux";
import actions from "../../store/actions/index";
import "./Login.less";
@connect(state=>({...state.user}),actions)
export default class Login extends React.Component{
  constructor(){
    super();
    this.state={
      info:"",
      status:0
    }
  }
  handleClick=()=>{
    let obj ={};
    if(!this.usn.value){
      this.setState({
        info:"用户名不可为空"
      });
      return;
    }
    if(!this.psw.value){
      this.setState({
        info:"密码不可为空",
      });
      return;
    }
    obj.username=this.usn.value;
    obj.password = this.psw.value;
    this.props.getUser(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps.login.success);
    if(newProps.login.success&&(newProps.login.success.length>0)){
      this.setState({
        info:newProps.login.success,
        status:1,
      });
      this.props.setCartProductList(newProps.login.user.userId);
      setTimeout(()=>{
        this.props.history.push("/profile");
      },2000);
    }
    if(newProps.login.fail&&newProps.login.fail.length>0){
      this.setState({
        info:newProps.login.fail
      })
    }
  }
    render(){
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
                      <div>
                        {this.state.info.length>0?<span className={this.state.status===1?"ok":""}>{this.state.info}</span>:null}
                        <i>忘记密码</i>
                      </div>
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