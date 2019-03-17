import React, { Component } from 'react';
import { Icon, Form, Input, Button, Message, Checkbox } from 'antd';
import styles from './index.less' 
import {setCookie, getCookie, delCookie} from '../../utils/cookie'
import {connect} from 'react-redux';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      name:'',
      password:'',
    }
  }

  componentDidMount(){
    this.setState({name:(getCookie("name") || ''),password:(getCookie("password") || '')}, () => {
      this.props.form.setFields({
        name:{
          value: this.state.name,
        },
        password:{
          value: this.state.password,
        },
      })
    })
  }

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'login_state',
          userInfo: values
        })
        this.props.history.push(this.props.jumppath === '/' ? '/normal' : this.props.jumppath);
        setCookie("name",values.name,7)
        if(values.remember){
          setCookie('password',values.password,7)
        }else{
          delCookie('password')
        }
      } 
    });
  }


  render () {
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <section className={styles.form}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入管理员账号',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="text" addonBefore={<Icon type="user"/>}/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="password" addonBefore={<Icon type="lock"/>}/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
              </FormItem>
              <Button className={styles.btn} type="primary" htmlType="submit">Sign In</Button>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}
Login = Form.create()(Login);

function mapStateToProps(state) {
  return {
    jumppath: state.path,
    islogin: state.islogin
  }
}
export default connect(mapStateToProps,null)(Login)
