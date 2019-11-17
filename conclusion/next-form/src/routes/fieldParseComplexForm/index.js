import React, { Component,Fragment } from 'react';
import { Button, Input, Field, Form } from '@alifd/next';

const FormItem = Form.Item;
export default class Tabtset extends Component {
  field = new Field(this, {
    parseName: true,
  });
  
  state = {
    infoCount: [[1]],
  }

  // 添加一个表单区块
  addInfo = () => {
    const { infoCount } = this.state;
    infoCount.push([1]);
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
    infoCount[index].forEach((item1, index1) => {
      ['name', 'age'].forEach(item2 => {
        this.field.spliceArray(`${item2}.${index}_{index1}`, index1)
      })
    })
    infoCount.splice(index, 1);
    this.setState({
      infoCount,
    })
  }

  // 添加内部区块
  addInnerInfo = index => {
    const { infoCount } = this.state;
    infoCount[index].push(1);
    this.setState({
      infoCount,
    })
  }

  // 删除内部区块
  deleteInnerInfo = (index, index1) => {
    const { infoCount } = this.state;
    ['name', 'age'].forEach(item => {
      this.field.spliceArray(`${item}.${index}_{index1}`, index1)
    })
    infoCount[index].splice(index1, 1);
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
                {item.map((item1, index1) => (
                  <div style={{ border: '1px solid red' }} key={index1}>
                    <FormItem label="name">
                      <Input {...init(`name.${index}_${index1}`)} />
                    </FormItem>
                    <FormItem label="age">
                      <Input {...init(`age.${index}_${index1}`)} />
                    </FormItem>
                    {item.length > 1 &&
                      <div onClick={() => this.deleteInnerInfo(index, index1)} style={{ textAlign: 'center' }}>删除此内部区块</div>
                    }
                    {index1 === item.length - 1 &&
                      <div onClick={() => this.addInnerInfo(index)} style={{ margin: '12px 0' }}>添加内部区块</div>
                    }
                  </div>
                ))}
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
