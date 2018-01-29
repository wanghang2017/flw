import React from "react";
import Header from "../../components/Header/Header";
import "./ProDetail.less";
export default class ProDetail extends React.Component{
    render(){
        return (
            <div>
                <Header hasBack={true} hasSearch={false} title="个人资料"/>
                <div className="proDetail-container">
                    <ul>
                        <li><span>头像</span><img src="http://localhost:9000/img/users/default.png"/><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>用户名</span><span></span><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>真实姓名</span><em className="iconfont icon-weibiaoti517"></em></li>
                        <li><span>性别</span><span></span><em className="iconfont icon-weibiaoti517"></em></li>
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