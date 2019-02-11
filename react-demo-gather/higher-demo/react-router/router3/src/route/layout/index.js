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
          current: 'first',
          theme: 'dark',
          currentSilde: '',
        }
    }
  
    componentWillMount() {
      window.addEventListener("popstate", this.handlePop.bind(this))
  }
  componentDidMount() {
    this.setState({
      current: window.location.hash.split('/')[1],
      currentSilde:`${window.location.hash.split('/')[1]}/${window.location.hash.split('/')[2]}`
  })//写在上述两个生命周期函数都可以，保证刷新时selectkey正常显示
      window.removeEventListener("popstate", this.handlePop.bind(this))
  }
  handlePop(){
      this.setState({
          current: window.location.hash.split('/')[1],
          currentSilde:`${window.location.hash.split('/')[1]}/${window.location.hash.split('/')[2]}`
      })
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  silderhandleClick = (e) => {
    this.setState({
      currentSilde: e.key,
    });
  }

  render() {
      //根据上方的topbar的选择进行slidebar的匹配，若部动态匹配则将下方的sildeconfig替换为navconfig.slide
    const route=location.hash.split('/')[1]
    const sildeconfig=navconfig.slide.filter((item)=>item.route.indexOf(route)!==-1)
    return (
      <div>
        <div className={styles.top_nav}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
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
              onClick={this.silderhandleClick}
              selectedKeys={[this.state.currentSilde]}
              mode="inline"
              theme={this.state.theme}
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