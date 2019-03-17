import React from 'react';
import { Menu, Icon,  Row, Col, Dropdown} from 'antd';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import styles from './index.less'
import {connect} from 'react-redux'
import { menuConfig } from '../../config/roleInfo.js';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Normal = () => <div>普通页面</div>
const Manage = () => <div>管理员页面</div>
const HighManage = () => <div>高级管理员页面</div>
const Noright = () => <div>没有权限</div>

class Layout extends React.Component {
  constructor() {
      super()
      this.state = {
      }
  }
  
  // 退出登录
  logout = () => {
    this.props.dispatch({
      type: 'logout'
    })
    this.props.history.push('/login')
  }
  
  // 切换角色(只能由高向低切换)
  roleChange = role => {
    this.props.dispatch({
      type: 'change_role',
      role
    })
    this.forceUpdate()
  }

  render() {
    const currentSilde=`/${location.pathname.split("/")[1]}`;
    const role = sessionStorage.getItem('ROLE')
    const newMenu =menuConfig.filter(item => item.role.includes(role))
    // 动态渲染切换角色的内容
    const roleMenu = (
      <Menu>
        <Menu.Item><div onClick ={() => {this.roleChange('normal')}}>普通用户</div></Menu.Item>
        {role === 'manage' || <Menu.Item><div onClick ={() => {this.roleChange('manage')}}>管理员</div></Menu.Item>}
      </Menu>
    )
    return (
     <div>  
      <div className={styles.header}>
        {role === 'normal' || <Dropdown overlay = {roleMenu}><div>切换角色</div></Dropdown>}
        <div onClick ={this.logout} style={{paddingLeft: '8px'}}>退出登录</div>
      </div>
      <div className={styles.content}> 
	      <Menu
	        selectedKeys={[currentSilde]}
          mode="inline"
          style={{ height: "calc(100vh - 49px)", width: '256px'}}
	      >
		      {newMenu.map(item=>(
              (item.list || []).length>0 ? <SubMenu key={item.route} title={item.name}> 
              {item.list.map(
                (item)=> <Menu.Item key={item.route}>
                  <Link to={item.route}>{item.name}</Link>
                  </Menu.Item>)}
              </SubMenu> : <Menu.Item key={item.route}>
                  <Link to={item.route}>{item.name}</Link>
                </Menu.Item> 
            ))}
      	  </Menu>
          <div className={styles.detail}>
            <Switch>
              <Route path="/normal" component={Normal} />
              <Route path="/manage" component={Manage} />
              <Route path="/highmanage" component={HighManage} />
              <Route path="/noright" component={Noright} />
            </Switch>
          </div>
      </div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    role: state.role
  }
}
export default connect(mapStateToProps,null)(Layout)