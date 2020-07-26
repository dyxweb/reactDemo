import React, { Component } from 'react';
import { Drawer } from '@alifd/next';

export default class Panel extends Component {
  componentDidMount() {
    // 如果只是单纯使用Drawer的visible属性控制的话，componentDidMount的触发时机并不是我们预期的那样
    console.log('didMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if (this.props.editId) {}
    if (prevProps.editId !== this.props.editId) {
      // 当有props值变化时做出相关操作，如数据请求等
    }
  }

  render() {
    const { visible, toggleVisible, editId } = this.props;
    return (
      <div>
        <Drawer
          title="标题"
          visible={visible}
          onClose={toggleVisible}
        >
          测试使用{editId}
        </Drawer>
      </div>
    )
  }
}