import React from 'react';
import { Router, Route,IndexRedirect,IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import List from './routes/List.js';
import List1 from './routes/list1.js';
import Detail from './routes/detail.js';
import Mange from './routes/mange.js';
import Jump from './routes/jump.js';
import Form from './routes/form.js';
import Effect from './routes/effect.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
     <Route path="/" component={Jump}>
    {/* <IndexRedirect to="/inde" />*/}//打开直接跳转到该路由，且路由的to的值不要使用index
    <IndexRoute component={List}/>//默认显示组件
      <Route path="/inde" component={IndexPage} />
      <Route path="/list" component={List} />
      <Route path="/list/:id" component={List1} >
       <IndexRedirect to="/list/:id/detail" />
       <Route path="/list/:id/detail" component={Detail} />
       <Route path="/list/:id/mange" component={Mange} />
      </Route> 
      <Route path="/form" component={Form} />
      <Route path="/effect" component={Effect} />
     </Route>  
    </Router>
  );
}

export default RouterConfig;
