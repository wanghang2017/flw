import React from "react";
import Header from "../../components/Header/Header";
import "./Reg.less";
import actions from "../../store/actions/user";
import {connect} from "react-redux";
@connect(state=>({...state.user}),actions)
export default class Reg extends React.Component{
  hanldeClick=()=>{
    let obj = {};
    obj.username=this.usn.value;
    obj.password=this.psw.value;
    this.props.setUser(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps);
    if(newProps.reg.success&&newProps.reg.success.length>0){
      setTimeout(()=>{
        this.props.history.push("/login");
      },3000);
    }
  }
    render(){
        return (
          <div>
            <Header hasBack={true} hasSearch={false} title="注册"/>
            <div className="reg-container">
              <ul>
                <li>
                  <label htmlFor="username">用户名</label>
                  <input type="text" id="username" ref={x=>this.usn=x}/>
                </li>
                <li>
                  <label htmlFor="password">密 码</label>
                  <input type="text" id="password" ref={x=>this.psw=x}/>
                </li>
                <li>
                  <button onClick={this.hanldeClick}>注册</button>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}