import React from "react";
import Header from "../../components/Header/Header";
import "./Reg.less";
import actions from "../../store/actions/user";
import {connect} from "react-redux";
@connect(state=>({...state.user}),actions)
export default class Reg extends React.Component{
  constructor() {
    super();
    this.state={
      info:"",
      status:0
    }
  }

  hanldeClick=()=>{
    let obj = {};
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
    obj.password=this.psw.value;
    this.props.setUser(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps);

    if(newProps.reg.success&&newProps.reg.success.length>0){
      this.setState({
        info:newProps.reg.success,
        status:1,
      });
      setTimeout(()=>{
        this.props.history.push("/login");
      },2000);
    }
    if(newProps.reg.fail&&newProps.reg.fail.length>0){
      this.setState({
        info:newProps.reg.fail,
        status:0,
      });
    }
  }
  componentWillUnmount(){
    this.props.clearReg();
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
                <li>
                  {this.state.info.length>0?<p className={this.state.status===1?"ok":""}>{this.state.info}</p>:null}
                </li>
              </ul>
            </div>
          </div>
        )
    }
}