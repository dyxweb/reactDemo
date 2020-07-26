/**
 * 使用路由控制
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@alifd/next';
import Panel from './panel';

export default class Best extends Component {
  onAdd = () => {
    this.props.history.push('/best/add')
  }

  onEdit = editId => {
    this.props.history.push(`/best/${editId}/edit`);
  }

  render() {
    return (
      <div>
        <div>使用路由控制</div>
        <Button onClick={this.onAdd}>打开</Button>
        <Button onClick={() => this.onEdit(1)}>编辑1</Button>
        <Button onClick={() => this.onEdit(2)}>编辑2</Button>
        <Button onClick={() => this.props.history.push('/normal')}>normal</Button>
        <Button onClick={() => this.props.history.push('/better')}>better</Button>
        <Switch>
          <Route exact path="/best/add" render = {props => <Panel {...props} operationType="add" />} />
          <Route exact path="/best/:editId/edit" render = {props => <Panel {...props} operationType="edit" />} />
        </Switch>
      </div>
    )
  }
}