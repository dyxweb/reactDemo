import React, { Component,Fragment } from 'react';
import { Button, Input, Field, Form } from '@alifd/next';

const FormItem = Form.Item;
export default class Tabtset extends Component {
  field = new Field(this);
  
  state = {
    infoCount: [1],
  }

  // 添加一个表单区块
  addInfo = () => {
    const { infoCount } = this.state;
    infoCount.push(1);
    this.setState({
      infoCount,
    })
  }

  // 删除一个表单区块
  deleteInfo = index => {
    const { infoCount } = this.state;
    ['title', 'content'].forEach(item => {
      this.field.spliceArray(`${item}.{index}`, index)
    })
    infoCount.splice(index, 1);
    this.setState({
      infoCount,
    })
  }

  // 提交
  handleSubmit = () => {
    this.field.validate((errors, values) => {
      console.log(values);
    })
  }

  render() {
    const { init } = this.field;
    const { infoCount } = this.state;
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Form>
          {infoCount.map((item, index) => (
            <Fragment key={index}>
              <div style={{ border: '1px solid #eee', padding: '24px' }}>
                <FormItem label="title">
                  <Input {...init(`title.${index}`)} />
                </FormItem>
                <FormItem label="content">
                  <Input {...init(`content.${index}`)} />
                </FormItem>
                {infoCount.length > 1 &&
                  <div onClick={() => this.deleteInfo(index)} style={{ textAlign: 'center' }}>删除此区块</div>
                }
              </div>
              {index === infoCount.length - 1 &&
                <div onClick={this.addInfo} style={{ margin: '12px 0' }}>添加区块</div>
              }
            </Fragment>
          ))}
        </Form>
        <Button onClick={this.handleSubmit}>提交</Button>
      </div>
    );
  }
}
