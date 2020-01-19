import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Modal } from 'antd';
import FunctionMessage from './FunctionMessage';
import DefaultPrompt from './DefaultPrompt';

export default class App extends Component {
  // 提示框的确认的方法(移除挂载自定义提示组件的dom)
  onOk = callback => {
    callback(true);
    const routerDom = document.getElementById('router-dom');
    document.getElementsByTagName('body')[0].removeChild(routerDom);
    ReactDOM.unmountComponentAtNode(routerDom);
  };

  // 提示框的取消的方法(移除挂载自定义提示组件的dom)
  onCancel = callback => {
    callback(false);
    const routerDom = document.getElementById('router-dom');
    document.getElementsByTagName('body')[0].removeChild(routerDom);
    ReactDOM.unmountComponentAtNode(routerDom);
  };

  // getUserConfirmation自定义提示，message就是对应路由页面的message信息
  getConfirmation = (message, callback) => {
    // 在body下添加新的节点用于挂载自定义提示组件
    const routerDom = document.createElement('div');
    routerDom.setAttribute('id', 'router-dom');
    document.getElementsByTagName('body')[0].appendChild(routerDom);
    const ConFirmComponent = () => (
      <Modal
        title="使用getUserConfirmation实现自定义离开样式"
        visible={true}
        onOk={() => this.onOk(callback)}
        onCancel={() => this.onCancel(callback)}
      >
        {message}
      </Modal>
    )
    ReactDOM.render(
      <ConFirmComponent />,
      document.getElementById('router-dom')
    )
  }

  render() {
    return (
      <Router getUserConfirmation={this.getConfirmation}>
        <Switch>
          <Route path="/default/prompt" component={DefaultPrompt} />
          <Route path="/function/message" component={FunctionMessage} />
          <Redirect to="/default/prompt" />
        </Switch>
      </Router>
    )
  }
};