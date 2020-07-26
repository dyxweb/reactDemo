/**
 * 使用运算符控制panel组件的渲染
 */
import React, { Component } from 'react';
import { Button } from '@alifd/next';
import Panel from './panel';

export default class Better extends Component {
  state = {
    visible: false,
    editId: '',
  }

  onAdd = () => {
    this.setState({
      visible: true,
      editId: '',
    });
  }

  onEdit = (editId) => {
    this.setState({
      visible: true,
      editId,
    });
  }

  toggleVisible = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    })
  }

  render() {
    const { visible, editId } = this.state;
    return (
      <div>
        <div>使用运算符控制panel组件的渲染</div>
        <Button onClick={this.onAdd}>打开</Button>
        <Button onClick={() => this.onEdit(1)}>编辑1</Button>
        <Button onClick={() => this.onEdit(2)}>编辑2</Button>
        <Button onClick={() => this.props.history.push('/normal')}>normal</Button>
        <Button onClick={() => this.props.history.push('/best')}>best</Button>
        {visible && <Panel toggleVisible={this.toggleVisible} editId={editId} />}
      </div>
    )
  }
}