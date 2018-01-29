import React from "react";
import Header from "../../components/Header/Header";
import "./Reg.less";
export default class Reg extends React.Component{
    render(){
        return (
            <div>
                <Header hasBack={true} hasSearch={false} title="注册"/>
                <div className="reg-container">

                </div>
            </div>
        )
    }
}