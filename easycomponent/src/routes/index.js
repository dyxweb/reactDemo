import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Tab from './tab';
import Gotop from './gotop';
import Balloon from './balloon';
import Icon from './icon';
import Dialog from './dialog';
import './index.css' 
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

const layout = (props) => {
  const key = location.pathname.split('/')[1]
  return (
  <div>
    <Router>
        <div className="all">
        <Menu
        style={{ width: 256, height: '100vh' }}
        defaultSelectedKeys={[key || 'tab']}
        defaultOpenKeys={['react']}
        mode="inline"
      >
        <SubMenu key="react" title="react">
            <Menu.Item key="tab"><Link to="/tab">tab</Link></Menu.Item>
            <Menu.Item key="gotop"><Link to="/gotop">gotop</Link></Menu.Item>
            <Menu.Item key="balloon"><Link to="/balloon">balloon</Link></Menu.Item>
            <Menu.Item key="icon"><Link to="/icon">icon</Link></Menu.Item>
            <Menu.Item key="dialog"><Link to="/dialog">dialog</Link></Menu.Item>
        </SubMenu>
      </Menu>
        <div className="total_content">
            <Switch>
                <Route path="/tab" component={Tab}/>
                <Route path="/gotop" component={Gotop}/>
                <Route path="/balloon" component={Balloon}/>
                <Route path="/icon" component={Icon}/>
                <Route path="/dialog" component={Dialog}/>
                <Redirect to="/tab" />
            </Switch>
        </div>
        </div>
    </Router>
  </div>  
)};

export default layout;