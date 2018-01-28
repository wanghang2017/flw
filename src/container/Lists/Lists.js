import React from "react";
import Header from "../../components/Header/Header";
export default class Lists extends React.Component{
    componentWillMount(){

    }
    render(){
      let title = "商品列表";
      switch (this.props.match.params.type) {
        case "hot":
          title="热门商品";
          break;
        case "cheap":
          title="特价专区";
          break;
      }
      return (
            <div>
                <Header hasBack={true} hasSearch={false} title={title}/>
                <div className="lists-container">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}