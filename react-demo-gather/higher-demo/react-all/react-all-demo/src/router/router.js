import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import First from 'pages/first';
import Second from 'pages/second';
import ChildRoute from 'pages/childRoute';
import Counter from 'pages/Counter/Counter';
import UserInfo from 'pages/UserInfo/UserInfo';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">第二页</Link></li>
                <li><Link to="/page2">嵌套路由</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={First}/>
                <Route path="/page1" component={Second}/>
                <Route path="/page2" component={ChildRoute}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;