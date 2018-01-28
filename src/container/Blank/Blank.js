import React from "react";
import Header from "../../components/Header/Header";
import "./Blank.less";
export default class Blank extends React.Component{
    render(){
        return (
          <div>
            <Header hasBack={true} hasSearch={false} title="空白页"/>
            <div className="blank-container">
              <p>程序员小哥哥小姐姐们</p>
              <p>正在努力开发中....</p>
            </div>
          </div>

        )
    }
}