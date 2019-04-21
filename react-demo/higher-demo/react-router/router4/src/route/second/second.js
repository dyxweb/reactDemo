import React from "react";
import { Input, Button, Form } from 'antd';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import SecondId from '../second/secondId'

class Second extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      option: '',
      visible: true,
    }
  }

  infoSubmit = () => {
    this.props.form.validateFields((err,values) => {
      if(!err){
        this.setState({
          options: [...this.state.options, values.option]
        }, () => this.props.form.setFieldsValue({
          option: '',
        }))
      }
    })
  }

  chooseOption = () => {
    this.setState({
      visible: false,
    });
    const prevTime = new Date().getTime();
    const timer = setInterval(() => {
      const randomNumber = Math.floor(Math.random()*this.state.options.length);
      this.setState({
        option: this.state.options[randomNumber]
      })
      if (new Date().getTime() - prevTime > 5000) {
        clearInterval(timer)
      }
    }, 100)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { option, options, visible } = this.state;
    return(
      <div>
        {getFieldDecorator('option', {
          rules: [{
              required: true,
              message: '请输入选项',
          }],
        })(
          <Input placeholder="请输入选项" style={{ width: '200px' }} />
        )}
        <Button type="primary" onClick={this.infoSubmit}>确定</Button>
        {visible && <div>
          {options.map((item,index) => <div key={index}>{item}</div>)}
        </div>}
        {(options.length > 1 && visible) && <Button type="primary" onClick={this.chooseOption}>选择</Button>}
        {!visible && <div>{option}</div>}
        <Switch>
          <Route path="/second/:id" component={SecondId} />
          <Redirect to="/second/a" />
        </Switch>
      </div>
    )
  }
}

const NewSecond = Form.create({ name: 'dyx' })(Second)
export default NewSecond;