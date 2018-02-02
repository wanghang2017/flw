import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom"
import "./Cart.less";
import {connect} from "react-redux";
import actions from "../../store/actions/index";
@connect(state=>({...state.cart,...state.user}),actions)
export default class Cart extends React.Component{
  constructor(){
    super();
    this.state={
      productList:[]
    }
  }
  componentWillMount(){
    // console.log(this.props.login.user.userId);
    if(this.props.login.user){
      this.props.setCartProductList(this.props.login.user.userId);
    }
  }
  getTotal=()=>{
    let total=0;
    let productList=[];
    if(this.state.isAllChoose){
      productList=[...this.state.productList];
    }else{
      productList=this.state.productList.filter(item=>item.isChoose);
    }
    productList.forEach(item=>{
      total+=item.product.productPrice*item.count;
    });
    return total;
  };
  componentWillReceiveProps(newProps){
    // console.log(this);
    // console.log(newProps);
    if(newProps.productList){
      let productList = JSON.parse(JSON.stringify(newProps.productList));
      //初始化isChoose
      if(typeof this.state.productList[0]=="undefined"){
        productList=productList.map(item=>{
          return {...item,isChoose:false};
        });
      }else {
        console.log("a");
        productList = productList.map((item)=>{
          return {...item,isChoose:this.state.productList.find(l=>l.productId==item.productId).isChoose}
        });
      }
      console.log(productList);
      this.setState({...this.state,productList});
    }
  }
  handleIsAllChoose=()=>{
    return this.state.productList.every(item=>item.isChoose);
  };
  handleSetAllChoose=()=>{
    let productList = this.state.productList.map(item=>{
      item.isChoose=!this.handleIsAllChoose();
      return item;
    });
    this.setState({productList});
  };
  handleClick=(index)=>{
    let productList = this.state.productList;
    productList[index].isChoose=!productList[index].isChoose;
    this.setState({
      ...this.state,productList
    })
  };

  componentWillUnmount(){
    console.log(this.props);
    let data={};
    if(this.state.productList.length>0){
      data["productList"]=this.state.productList.map(item=>({productId:item.product.productId,count:item.count}));
      data["userId"]= this.props.login.user.userId;
      console.log(data);
      this.props.cartUpdate(data);
    }
  }
    render(){
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title="购物车"/>
                <div className="cart-container">
                  {this.state.productList.length<=0?
                    (<div className="cartNone"><em className="iconfont icon-gouwuche"></em><p>您的购物车内还没有任何商品</p><Link to="/"><button>返回首页</button></Link></div>):(this.state.productList.map((item,index)=>{
                      console.log(item);
                      return <li  className="shopInfo" key={index}>
                    <div className="list_chk">
                      <span className={item.isChoose?"click":""} onClick={()=>{
                        this.handleClick(index);
                      }}></span>
                    </div>
                    <div className="list_con">
                      <div className="con_img">
                        < img src={item.product.productImg} alt=""/>
                      </div>
                      <div className="amount_box cl">
                        <a className="add" onClick={()=>{if(item.count<=1)return; this.props.cartCountMinus(index)}}>-</ a>
                        <input type="text" className="sum" value={item.count}/>
                        <a className="remove" onClick={()=>this.props.cartCountAdd(index)}>+</ a>
                      </div>
                    </div>
                    <div className="list_info">
                      <div className="list_text">{item.product.productInfo}</div>
                      <p className="price">￥{item.product.productPrice}</p >
                    </div>
                    </li>
                  }))}
                  {
                    this.state.productList.length>0?(<div className="cart_foot">
                        <div className="left_container">
                          <div className="left_choose">
                            <span className={this.handleIsAllChoose()?"click":""} onClick={this.handleSetAllChoose}></span>
                            <span>全选</span>
                          </div>
                          <p>合计:{this.getTotal()}</p>
                        </div>
                        <button>去结算</button>
                      </div>
                      ):null
                  }
                </div>

            </div>
        )
    }
}