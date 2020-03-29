import React from 'react';
import { Menu, Icon,Switch, Row, Col } from 'antd';
import { Router, Link, Route,browserHistory} from 'react-router'
import styles from './index.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
//定义数据一般会加上/
const navconfig={
      "top": [
      {
        "name": "one",
        "route": "first"
      },
      {
        "name": "two",
        "route": "second"
      }, 
      {
        "name": "three",
        "route": "third"
      },
      {
        "name": "four",
        "route": "fourth"
      }],
      "slide": [
      {
        "name": "one_a",
        "route": "first",
        "list": [
        {
          "name": "one_a_a",
          "route": "first/a",
        }, 
        {
          "name": "one_a_b",
          "route": "first/b",
        }, 
        {
          "name": "one_a_c",
          "route": "first/c",
        }]
      },
      {
        "name": "two_a",
        "route": "second",
        "list": [
          {
            "name": "second_a_a",
            "route": "second/a",
          },
          {
            "name": "second_a_b",
            "route": "second/b",
          },
        ]
      },
      {
        "name": "three_a",
        "route": "third",
        "list": [
        {
          "name": "three_a_a",
          "route": "third/a",
        }, 
        {
          "name": "three_a_b",
          "route": "third/b",
        }, 
        {
            "name": "three_a_c",
            "route": "third/c",
        }]
      },
      {
        "name": "fourth_a",
        "route": "fourth/a",
        "list": []
      },]
}

  export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
          // current: 'first',
          // currentSilde: '',
        }
    }
  
  // componentDidMount() {
  //   this.setState({
  //     current: window.location.hash.split('/')[1],
  //     currentSilde:`${window.location.hash.split('/')[1]}/${window.location.hash.split('/')[2]}`
  //   })
  // }

  // componentWillReceiveProps() {
  //   this.setState({
  //     current: window.location.hash.split('/')[1],
  //     currentSilde:`${window.location.hash.split('/')[1]}/${window.location.hash.split('/')[2]}`
  //   })
  // }

    handleClick = (e) => {
      this.setState({
        current: e.key
      });
    }

    silderhandleClick = (e) => {
      this.setState({
        currentSilde: e.key,
      });
    }

  render() {
    //根据上方的topbar的选择进行slidebar的匹配，若不动态匹配则将下方的sildeconfig替换为navconfig.slide
    const route=location.hash.split('/')[1]
    const sildeconfig=navconfig.slide.filter((item)=>item.route.indexOf(route)!==-1)
    // 可以在此定义导航的默认选中项，非受控形式，也可以绑定事件将选择项存在state中，在componentWillReceiveProps中更新状态
    const current = window.location.hash.split('/')[1];
    const currentSilde= `${window.location.hash.split('/')[1]}/${window.location.hash.split('/')[2]}`;
    return (
      <div>
        <div>
          <Menu
            selectedKeys={[current]}
            mode="horizontal"
          >
            {navconfig.top.map((item)=>(
              <Menu.Item key={item.route}>
                <Link to={`/${item.route}`}>{item.name}</Link>
              </Menu.Item>))
            }
          </Menu>
        </div>
        <div className={styles.all}> 
          <Menu
              selectedKeys={[currentSilde]}
              mode="inline"
              theme='light'
              defaultOpenKeys={['first', 'second', 'third', 'fourth']}
              style={{width : 256, height: 'calc(100vh - 48px)'}}
            >
            {sildeconfig.map(item=>(
              item.list.length>0 ? <SubMenu key={item.route} title={item.name}> 
              {item.list.map(
                (item)=> <Menu.Item key={item.route}>
                  <Link to={`/${item.route}`}>{item.name}</Link>
                  </Menu.Item>)}
              </SubMenu> : <Menu.Item key={item.route}>
                  <Link to={`/${item.route}`}>{item.name}</Link>
                </Menu.Item> 
            ))}
            </Menu>
          <div className={styles.total_content}>
            {this.props.children}
          </div>
        </div>
      </div>  
    );
  }
}