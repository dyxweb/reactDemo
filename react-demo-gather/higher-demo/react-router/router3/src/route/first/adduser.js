import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,DatePicker,message } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          console.log('Received values of form: ', values);
    }
    })
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
      <FormItem
          {...formItemLayout}
          label="id"
        >
          <Input style={{ width: '100%' }} value={this.props.params.id} disabled />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="name"
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="date"
        >
          {getFieldDecorator('date', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="fee"
        >
          {getFieldDecorator('fee', {
            rules: [{ required: true, message: 'Please input your fee!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}
RegistrationForm.contextTypes = {
  router: PropTypes.object.isRequired
};
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export  default WrappedRegistrationForm