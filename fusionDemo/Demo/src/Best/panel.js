import React, { Component } from 'react';
import { Drawer } from '@alifd/next';

export default class Panel extends Component {
  componentDidMount() {
    // componentDidMount的触发时机是我们预期的那样
    if (this.props.operationType === 'add') {
      // 添加
    } else {
      const editId = this.props.match.params.editId;
      // 编辑
    }
    console.log('didMount');
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Drawer
          title="标题"
          visible
          onClose={() => this.props.history.push('/best')}
        >
          测试使用{this.props.match.params.editId}
        </Drawer>
      </div>
    )
  }
}