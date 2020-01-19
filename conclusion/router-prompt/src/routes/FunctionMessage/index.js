/**
 * 使用Prompt的message的function形式实现自定义的提示样式
 */
import React, { Component } from 'react';
import { Prompt, Link } from 'react-router-dom';
import { Modal } from 'antd';

export default class FunctionMessage extends Component {
  state = {
    isBlock: true, // 是否阻止离开此页面
  };

  // 确认离开时的方法
  onConfirmLeave = pathname => {
    // 将isBlock设置为false，不再阻止跳转行为，并手动进行路由跳转
    this.setState({
      isBlock: false,
    }, () => this.props.history.push(pathname));
  }

  render() {
    const { isBlock } = this.state;
    return (
      <div>
        <Link to="/default/prompt">跳转到默认提示的页面</Link>
        <Prompt
          when={isBlock}
          message={location => {
            Modal.confirm({
              title: '确认离开此页面？',
              onOk: () => this.onConfirmLeave(location),
            })
            return false;
          }}
        />
        <h1>
          使用Message的function的用法实现自定义阻止效果
        </h1>
      </div>
    )
  }
}
