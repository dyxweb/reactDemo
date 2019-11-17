import React, { Component,Fragment } from 'react';
import { Button, Input, Field, Form } from '@alifd/next';

const FormItem = Form.Item;
export default class Tabtset extends Component {
  field = new Field(this, {
    parseName: true,
  });
  
  state = {
    formInfo: [
      {
        title: '',
        content: '',
        children: [
          {
            name: '',
            age: '',
          },
        ],
      },
    ]
  }

  // 添加一个表单区块
  addInfo = () => {
    const { formInfo } = this.state;
    formInfo.push({
      title: '',
      content: '',
      children: [
        {
          name: '',
          age: '',
        }
      ]
    });
    this.setState({
      formInfo,
    })
  }

  // 删除一个表单区块
  deleteInfo = index => {
    const { formInfo } = this.state;
    formInfo.splice(index, 1);
    this.setState({
      formInfo,
    })
  }

  // 添加内部区块
  addInnerInfo = index => {
    const { formInfo } = this.state;
    formInfo[index].children.push({
      name: '',
      age: '',
    });
    this.setState({
      formInfo,
    })
  }

  // 删除内部区块
  deleteInnerInfo = (index, index1) => {
    const { formInfo } = this.state;
    formInfo[index].children.splice(index1, 1);
    this.setState({
      formInfo,
    })
  }

  // 表单项改变(index是第一层表单的索引，index1是第二层表单的索引，field是对应表单的属性，value是对应表单的值)
  formChange = (index, index1, field, value) => {
    const { formInfo } = this.state;
    // 第一层表单值改变
    if (typeof index1 === 'undefined') {
      formInfo[index][field] = value;
    } else {
      formInfo[index].children[index1][field] = value;
    }
  }

  // 提交
  handleSubmit = () => {
    const { formInfo } = this.state;
    this.field.validate((errors, values) => {
      console.log(formInfo);
    })
  }

  render() {
    const { init } = this.field;
    const { formInfo } = this.state;
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Form>
          {formInfo.map((item, index) => (
            <Fragment key={index}>
              <div style={{ border: '1px solid #eee', padding: '24px' }}>
                <FormItem label="title">
                  <Input {...init(`title.${index}`, {
                    props: {
                      value: item.title,
                      onChange: value => this.formChange(index, undefined, 'title', value),
                    }
                  })} />
                </FormItem>
                <FormItem label="content">
                  <Input {...init(`content.${index}`, {
                    props: {
                      value: item.content,
                      onChange: value => this.formChange(index, undefined, 'content', value),
                    }
                  })} />
                </FormItem>
                {item.children.map((item1, index1) => (
                  <div style={{ border: '1px solid red' }} key={index1}>
                    <FormItem label="name">
                      <Input {...init(`name.${index}_${index1}`, {
                        props: {
                          value: item1.name,
                          onChange: value => this.formChange(index, index1, 'name', value),
                        }
                      })} />
                    </FormItem>
                    <FormItem label="age">
                      <Input {...init(`age.${index}_${index1}`, {
                        props: {
                          value: item1.age,
                          onChange: value => this.formChange(index, index1, 'age', value),
                        }
                      })} />
                    </FormItem>
                    {item.children.length > 1 &&
                      <div onClick={() => this.deleteInnerInfo(index, index1)} style={{ textAlign: 'center' }}>删除此内部区块</div>
                    }
                    {index1 === item.children.length - 1 &&
                      <div onClick={() => this.addInnerInfo(index)} style={{ margin: '12px 0' }}>添加内部区块</div>
                    }
                  </div>
                ))}
                {formInfo.length > 1 &&
                  <div onClick={() => this.deleteInfo(index)} style={{ textAlign: 'center' }}>删除此区块</div>
                }
              </div>
              {index === formInfo.length - 1 &&
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
