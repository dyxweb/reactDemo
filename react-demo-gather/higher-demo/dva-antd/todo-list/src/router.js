import React from 'react';
import { Router, Route,IndexRedirect,IndexRoute } from 'dva/router';
import IndexPage from './routes/index';
import List from './routes/list/index.js';
import Info from './routes/list/info/info.js';
import Detail from './routes/list/info/detail.js';
import Mange from './routes/list/info/mange.js';
import Footer from './routes/footer';
import Form from './routes/form';
import AddEffect from './routes/addEffect';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
     <Route path="/" component={Footer}>
    {/* <IndexRedirect to="/inde" />*/}//打开直接跳转到该路由(url路径变化)，且路由的to的值不要使用index
    <IndexRoute component={List}/>//默认显示组件,url的路径不变
      <Route path="/inde" component={IndexPage} />
      <Route path="/list" component={List} />
      <Route path="/list/:id" component={Info} >
       <IndexRedirect to="/list/:id/detail" />
       <Route path="/list/:id/detail" component={Detail} />
       <Route path="/list/:id/mange" component={Mange} />
      </Route> 
      <Route path="/form" component={Form} />
      <Route path="/effect" component={AddEffect} />
     </Route>  
    </Router>
  );
}

export default RouterConfig;
