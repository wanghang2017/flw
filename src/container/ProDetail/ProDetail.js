import React from "react";
import Header from "../../components/Header/Header";
import "./ProDetail.less";
import {connect} from "react-redux";
import actions from "../../store/actions/user";
@connect(state=>({...state.user}),actions)
export default class ProDetail extends React.Component{
    componentWillMount(){
        if(!this.props.login.user){
            this.props.history.push("/login");
            return ;
        }
        if(!this.props.login.user.userName){
          this.props.history.push("/login");
            return;
        }
    }
    render(){
      console.log(this.props);
      let {userImg,userName,userSex}=this.props.login.user;
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title="个人资料"/>
                <div className="proDetail-container">
                    <ul>
                        <li><span>头像</span><img src={userImg}/><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>用户名</span><em className="iconfont icon-weibiaoti517"></em><span className="info">{userName}</span></li>
                        <li><span>真实姓名</span><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>性别</span><em className="iconfont icon-weibiaoti517"></em><span className="info">{userSex==0?"男":"女"}</span></li>
                    </ul>
                    <ul>
                        <li><span>密码管理</span><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>绑定手机</span><em className="iconfont icon-weibiaoti517"></em></li>
                    </ul>
                </div>
            </div>
        )
    }
}