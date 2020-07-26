/**
 * 使用Panel的visible属性控制
 */
import React, { Component } from 'react';
import { Button } from '@alifd/next';
import Panel from './panel';

export default class Normal extends Component {
  state = {
    visible: false,
    editId: '',
  }

  toggleVisible = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
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

  render() {
    const { visible, editId } = this.state;
    return (
      <div>
        <div>单纯使用Panel的visible属性控制</div>
        <Button onClick={this.onAdd}>打开</Button>
        <Button onClick={() => this.onEdit(1)}>编辑1</Button>
        <Button onClick={() => this.onEdit(2)}>编辑2</Button>
        <Button onClick={() => this.props.history.push('/better')}>better</Button>
        <Button onClick={() => this.props.history.push('/best')}>best</Button>
        <Panel visible={visible} toggleVisible={this.toggleVisible} editId={editId} />
      </div>
    )
  }
}