import React from "react";
import Header from "../../components/Header/Header";
import "./Login.less";
export default class Login extends React.Component{
    render(){
        return (
            <div>
                <Header hasBack={true} hasSearch={true} title="登陆"/>
                <div className="login-container">

                </div>
            </div>
        )
    }
}