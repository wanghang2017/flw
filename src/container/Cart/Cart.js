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
  /*componentWillMount(){
    // console.log(this.props.login.user.userId);
    if(this.props.login.user){
      this.props.setCartProductList(this.props.login.user.userId);
    }
  }*/
  componentWillMount(){
    // console.log(this);
    // console.log(newProps);
    console.log(this.props);
    if(this.props.productList.length>0){
      let productList = JSON.parse(JSON.stringify(this.props.productList));
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
    let productList;
    if(this.handleIsAllChoose()){
      productList = this.state.productList.map(item=>{
        item.isChoose=false;
        return item;
      });
    }else{
      productList = this.state.productList.map(item=>{
        item.isChoose=true;
        return item;
      });
    }

    this.setState({productList});
  };
  handleClick=(index)=>{
    let productList = this.state.productList;
    productList[index].isChoose=!productList[index].isChoose;
    this.setState({
      ...this.state,productList
    })
  };
  handleDelete=(id)=>{
    let productList = this.state.productList.filter(item=>item.product.productId!=id);
    this.setState({
      ...this.state,productList
    });
    this.props.deleteProduct(id);
  };
  componentWillUnmount(){
    let data={};
    if(this.props.login.user){
      data["productList"]=this.state.productList.map(item=>({productId:item.product.productId,count:item.count}));
      data["userId"]= this.props.login.user.userId;
      this.props.cartUpdate(data);
    }
  }
    render(){
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title="购物车"/>
                <div className="cart-container">
                  {this.state.productList.length<=0?
                    (<div className="cartNone"><em className="iconfont icon-gouwuche"></em><p>您的购物车内还没有任何商品</p><Link to="/"><button>返回首页</button></Link></div>):(<ul style={{paddingBottom:"50px"}}>
                      {this.state.productList.map((item,index)=>{
                        console.log(item);
                        return <li  className="shopInfo" key={index}>
                          <Link to={{pathname:`/godDetail/${item.product.productId}`,state:item.product}}>
                          <div className="list_chk">
                      <span className={item.isChoose?"click":""} onClick={(e)=>{e.preventDefault();
                        this.handleClick(index);
                      }}></span>
                          </div>
                            <div className="list_con">
                              <div className="con_img">
                                < img src={item.product.productImg} alt=""/>
                              </div>
                              <div className="amount_box cl">
                                <span className="add" onClick={(e)=>{e.preventDefault();if(item.count<=1)return; this.props.cartCountMinus(index)}}>-</ span>
                                <input type="text" className="sum" value={item.count} onChange={()=>{}}/>
                                <span className="remove" onClick={(e)=>{e.preventDefault();this.props.cartCountAdd(index)}}>+</ span>
                              </div>
                            </div>
                            <div className="list_info">
                              <div className="list_text">{item.product.productInfo}</div>
                              <p className="price">￥{item.product.productPrice}</p >
                              {item.isChoose?<button onClick={(e)=>{e.preventDefault();this.handleDelete(item.product.productId)}}>删除</button>:null}
                            </div>
                          </Link>
                        </li>
                      })}
                    </ul>)}

                  {
                    this.state.productList.length>0?(<div className="cart_foot">
                        <div className="left_container">
                          <div className="left_choose">
                            <span className={this.handleIsAllChoose()?"click":""} onClick={this.handleSetAllChoose}></span>
                            <span>全选</span>
                          </div>
                          <p>合计:{this.getTotal()}</p>
                        </div>
                        <Link to="/blank"><button>去结算</button></Link>
                      </div>
                      ):null
                  }
                </div>

            </div>
        )
    }
}