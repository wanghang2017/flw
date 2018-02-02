import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import "./Profile.less"
import actions from "../../store/actions/user";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Tab from "../../components/Tab/Tab";
@connect(state=>({...state.user}),actions)
@withRouter
export default class Profile extends React.Component{
    handleClick=()=>{
      console.log(this.props);
      this.props.clearLogin();
      this.props.history.push("/login");
    };

    render(){
      console.log(this.props);
      let{userName,userImg}=this.props.login.user;
      return (
            <div>
                <Header hasBack={false} hasSearch={false} title="个人中心"/>
                <div className="profile-container">
                    <Link to="/proDetail">
                        <div className="profile-info">
                            <img src={userImg} alt=""/>
                            <p>{userName}</p>
                            <p>用户等级 : 银牌会员</p>
                            <p>积分:0</p>
                            <em className="iconfont icon-weibiaoti517"></em>
                        </div>
                    </Link>
                    <ul>
                        <li><Link to="/blank"><em className="iconfont icon-dingdan1" style={{color:"#69ff50"}}></em><span>我的订单</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-location" style={{color:"#4fb2ff"}}></em><span>地址管理</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-pinglun" style={{color:"#ffc025"}}></em><span>商品评论</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-shoucang" style={{color:"#ff4522"}}></em><span>我的收藏</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/blank"><em className="iconfont icon-coupon" style={{color:"#d22dff"}}></em><span>优惠券</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-jifen" style={{color:"#ff7a17"}}></em><span>我的积分</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-yaoyiyao3" style={{color:"#3072ff"}}></em><span>每日摇一摇</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-fuwuzhongxin" style={{color:"#34ffa4"}}></em><span>服务中心</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                        <li><Link to="/blank"><em className="iconfont icon-fenxiang" style={{color:"#ff4d4d"}}></em><span>会员邀请码</span><em className="iconfont icon-weibiaoti517"></em></Link></li>
                    </ul>
                   <button onClick={this.handleClick}>退出登陆</button>
                </div>
              <Tab count={this.props.login}/>
            </div>
        )
    }
}