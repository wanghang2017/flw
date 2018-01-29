import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import "./Profile.less"
export default class Profile extends React.Component{
    render(){
        return (
            <div>
                <Header hasBack={false} hasSearch={false} title="个人中心"/>
                <div className="profile-container">
                    <Link to="/proDetail">
                        <div className="profile-info">
                            <img src="http://localhost:9000/img/users/default.png" alt=""/>
                            <p>哈哈</p>
                            <p>用户等级 : 银牌会员</p>
                            <p>积分:0</p>
                            <em className="iconfont icon-weibiaoti517"></em>
                        </div>
                    </Link>
                    <ul>
                        <li><Link to="/blank"><i></i><span>我的订单</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>地址管理</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>商品评论</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>我的收藏</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/blank"><i></i><span>优惠券</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>我的积分</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>每日摇一摇</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>服务中心</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><i></i><span>会员邀请码</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                    </ul>
                    <Link to="/login"><button>退出登陆</button></Link>
                </div>
            </div>
        )
    }
}