import React, { Component } from "react";
import { Tab } from '@alifd/next';
import TreeTransfer from '../../src/index.js'
import '@alifd/next/dist/next.css';
import './index.less';

const mockData = [
  {
    "label": '1',
    "key": "1",
    "children": [
      {
        "label": "1-0",
        "key": "1-0",
        "children": [
            {
              "label": "1-0-0",
              "key": "1-0-0"
            },
            {
              "label": "1-0-1",
              "key": "1-0-1"
            },
        ],
      },
      {
        "label": "1-1",
        "key": "1-1",
        "children": [
          {
            "label": "1-1-0",
            "key": "1-1-0"
          },
          {
            "label": "1-1-1",
            "key": "1-1-1"
          },
        ],
      }
    ],
  },
  {
    "label": '2',
    "key": "2",
    "children": [
      {
        "label": "2-0",
        "key": "2-0",
        "children": [
          {
            "label": "2-0-0",
            "key": "2-0-0"
          },
          {
            "label": "2-0-1",
            "key": "2-0-1"
          }
        ],
      },
      {
        "label": "2-1",
        "key": "2-1",
        "children": [
          {
            "label": "2-1-0",
            "key": "2-1-0"
          },
          {
            "label": "2-1-1",
            "key": "2-1-1"
          }
        ],
      },
    ],
  }
];
export default class TreeTransferExer extends Component {

  state= {
    values: ['1-0-0', '2-0-0'], // 受控使用时的values
  }

  onMove = (keys, info, changeState) => {
    if (changeState) {
      this.setState({
        values: keys,
      });
    }
    console.log(keys);
    console.log(JSON.parse(info));
  }

  render() {
    const { values } = this.state;
    return (
      <div className="container">
        <Tab defaultActiveKey="normal">
          <Tab.Item title="普通使用" key="normal">
            <TreeTransfer
              dataSource={mockData}
              title={['左侧标题', '右侧标题']}
              onMove={this.onMove}
            />
          </Tab.Item>
          <Tab.Item title="defaultValues的使用" key="defaultValues">
            <TreeTransfer
              dataSource={mockData}
              title={['左侧标题', '右侧标题']}
              onMove={this.onMove}
              defaultValues={['1-0-0', '2-0-0']}
            />
          </Tab.Item>
          <Tab.Item title="values的使用" key="values">
            <TreeTransfer
              dataSource={mockData}
              onMove={(keys, info) => this.onMove(keys, info, true)}
              title={['左侧标题', '右侧标题']}
              values={values}
            />
          </Tab.Item>
          <Tab.Item title="禁用穿梭框" key="disabled">
            <TreeTransfer
              dataSource={mockData}
              title={['左侧标题', '右侧标题']}
              onMove={this.onMove}
              defaultValues={['1-0-0', '2-0-0']}
              disabled
            />
          </Tab.Item>
          <Tab.Item title="左侧穿梭框禁用" key="leftDisabled">
            <TreeTransfer
              dataSource={mockData}
              title={['左侧标题', '右侧标题']}
              onMove={this.onMove}
              defaultValues={['1-0-0', '2-0-0']}
              leftDisabled
            />
          </Tab.Item>
          <Tab.Item title="右侧穿梭框禁用" key="rightDisabled">
            <TreeTransfer
              dataSource={mockData}
              title={['左侧标题', '右侧标题']}
              onMove={(keys, info) => this.onMove(keys, info, true)}
              values={values}
              rightDisabled
            />
          </Tab.Item>
        </Tab>
      </div>
    )  
  }
}
