import React from "react";
import { Router, Link, Route,hashHistory,IndexRedirect,browserHistory} from 'react-router'
import Layout from './layout'
import List from './first/list'
import FirstAdduser from './first/adduser'
import Second from './second/second'
import SecondId from './second/secondId'
import Third from './third'
import Fourth from './fourth'
import FourthDetail from './fourth/detail'

class RoutingNested extends React.Component {
	
    render() {
        //路由嵌套使用绝对路径相对路径都可以,使用browserHistory将html文件的引入js文件换做绝对路径
        return <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRedirect to="first" />
          <Route path="first" component={List} />
          <Route path="first/:id" component={FirstAdduser} />
          <Route path="/second" component={Second} >
          <IndexRedirect to="a" />
             <Route path="/second/:id" component={SecondId} />
          </Route>
          <Route path="/third" component={Third} >
          <IndexRedirect to="/third/a" />
             <Route path="/third/:id" component={SecondId} />
          </Route>
          <Route path="/fourth" component={Fourth} >
             <IndexRedirect to="/fourth/detail" />
             <Route path="/fourth/:a" component={FourthDetail} />
          </Route>
        </Route>  
       </Router>
        

    }
}

export default RoutingNested