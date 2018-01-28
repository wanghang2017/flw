import React from "react";
export default class HomeSwiper extends React.Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    automove=(length)=>{
      let index = this.state.index;
      this.timer = setInterval(()=>{
        index++;
        if(index>length){
          this.x.style.transition="";
          this.x.style.left=0;
          setTimeout(()=>{
            this.x.style.transition="all .5s";
            index = 1;
            this.setState({index});
          },0);
          return;
        }
        this.setState({index});
      },2000)
    };
    componentWillReceiveProps(newProps){
      let  length = newProps.sliders.length;
      if(length>0&&!this.timer){
          this.automove(length);
        }
    }
    componentDidMount(){
      let  length = this.props.sliders.length;
      if(length>0){
        this.automove(length);
      }
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
      let{sliders} = this.props;
      let length = sliders.length;
      let width = document.body.clientWidth;
      let left = width*this.state.index*(-1)+"px";
      let style={width:`${(length+1)*100}%`,left,transition:"all .5s"};
      let index = this.state.index;
      index = index===7?0:index;
      return (
            <div className="home-slider-container">
                <ul style={style} ref ={x=>this.x=x} className="home-slider-wrapper">
                  {this.props.sliders.map((slider,index)=>(
                      <li key={index} style={{width:width+"px"}}>
                          <img src={slider}/>
                      </li>
                  ))}
                    <li style={{width:width+"px"}}>
                        <img src={sliders[0]}/>
                    </li>
                </ul>
                <ul className="home-slider-dot">
                  {this.props.sliders.map((slider,key)=>(
                    <li key={key} className={key===index?"act":""}></li>
                  ))}
                </ul>
            </div>
        )
    }
}