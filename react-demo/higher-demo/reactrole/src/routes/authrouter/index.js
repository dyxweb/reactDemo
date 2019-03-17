import React, { Component } from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {routePath} from "../../redux/login/actions.js";
import { Message } from 'antd';
import { routeConfig } from '../../config/roleInfo.js';

class AuthRouter extends Component {
  render() {
    const {component: Component, ...rest} =this.props
    const isLogged = sessionStorage.getItem("islogin") === "1" ? true : false;
    if(!isLogged){
        if(routeConfig.filter(item => item.route === this.props.path)[0].role.includes(sessionStorage.getItem("ROLE"))) {
          this.props.dispatch(routePath(this.props.path))
        } else {
          this.props.dispatch(routePath('/normal'))
        }
        Message.warning("login")
    }

    // 判断是否登录以及是否有对应页面的权限
    const comRender = props => {
        if(isLogged) {
            if(routeConfig.filter(item => item.route === this.props.path)[0].role.includes(sessionStorage.getItem("ROLE"))) {
                return <Component {...props} />
            } else {
                return <Redirect to="/noright" />
            }
            return <Component {...props} />
        } else {
            return <Redirect to="/login" />
        }
    }
    return (
        <Route {...rest} render={props => comRender(props)} />
    )
  }
}

function mapStateToProps(state) {
    return {
        jumppath: state.login,
        role: state.role,
    }
}
const authrouter = connect(mapStateToProps,null)(AuthRouter)
export default withRouter(authrouter)
