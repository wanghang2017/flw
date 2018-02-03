import React from "react";
import Header from "../../components/Header/Header";
import "./Lists.less";
import {connect} from "react-redux";
import actions from "../../store/actions/index";
import {Link} from "react-router-dom";
@connect(state=>({...state}),actions)
export default class Lists extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products:[],
      status:1
    }
  }
    componentWillMount(){
      let title = "商品列表";
      let type = this.props.match.params.type;
      switch (type) {
        case "hot":
          title="热门商品";
          break;
        case "cheap":
          title="特价专区";
          break;
      }
      this.title=title;
      this.props.setProducts(type);
      switch (type) {
        case "0":
          type="phone";
          break;
        case "1":
          type="computer";
          break;
        case "2":
          type="earphone";
          break;
        case "3":
          type="household";
          break;
      }
      this.myType = type;
      //todo 获取详情，如果state里面没有则重新加载
    }
    componentWillReceiveProps(newProps){
      if(!newProps.products){return;}
      this.setState({
        products:newProps.products[this.myType]
      })
    }
    //todo  点击排序 重新从后台加载数据
  //todo 懒加载  滑动到一定距离加载再加载数据
  handleClick=(e)=>{

      let{target} = e;
      target = target.parentNode;
      if(target.tagName==="LI"){
        let ary = [...this.state.products];
        let orderBy = target.children[0].innerHTML;
        switch (orderBy){
          case "销量":
            ary.sort((a,b)=>(a.productHot-b.productHot)*this.state.status);
            this.setState({
              products:ary,
              status:this.state.status*-1
            });
            break;
          case "价格":
            ary.sort((a,b)=>(a.productPrice-b.productPrice)*this.state.status);
            this.setState({
              products:ary,
              status:this.state.status*-1
            });
            break;
          case "评论":
            ary.sort((a,b)=>(a.productQuality-b.productQuality)*this.state.status);
            this.setState({
              products:ary,
              status:this.state.status*-1
            });
            break;
        }
      }
    };
    handleAdd=(e,item)=>{
      e.preventDefault();
      console.log(this.props);
      this.props.addProduct(item);
      if(this.props.user.login.user){
        let id = this.props.user.login.user.userId;
        console.log(id,"zzzzz");
      }
    };
    render(){
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title={this.title}/>
              <div className="sortHeader">
                <ul onClick={(e)=>{this.handleClick(e)}}>
                  <li><span>销量</span><em></em></li>
                  <li><span>价格</span><em></em></li>
                  <li><span>评论</span><em></em></li>
                </ul>
              </div>
                <div className="lists-container">
                    <ul className="lists-box">
                      {this.state.products.map((item,index)=>(
                        <Link to={{pathname:`/godDetail/${item.productId}`,state:item}} key={index}>
                          <li className="lists-item" >
                            <img src={item.productImg}/>
                            <p>{item.productTitle}</p>
                            <p><span>￥{item.productPrice}</span><em className="iconfont icon-gouwuche" onClick={(e)=>this.handleAdd(e,item)}></em></p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                </div>
            </div>
        )
    }
}