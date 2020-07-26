import React, { Component } from 'react';
import { Drawer } from '@alifd/next';

export default class Panel extends Component {
  componentDidMount() {
    // 在外层控制组件的渲染，componentDidMount的触发时机和我们预期的一样
    console.log('didMount');
    if (this.props.editId) {}
  }

  render() {
    const { toggleVisible, editId } = this.props;
    return (
      <div>
        <Drawer
          visible
          title="标题"
          onClose={toggleVisible}
        >
          测试使用{editId}
        </Drawer>
      </div>
    )
  }
}