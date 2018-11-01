import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';

const ChildRouter = (props) => {
	// 注意无状态组件不能使用this以及props的传入
    const click=()=>props.history.push('/page2/1')//路由变化但是视图不变
	return (
	 <div>
	   第一个示例的第【3】个路由，只在第三个url里显示
      <Router >
        <div>
            <li onClick={click}>跳转子1</li>
            <li><Link to="/page2/2">跳转子2</Link></li>
            <hr/>
            {/* component 是一个React组件。
              * 注意，组件是放在这个属性里，而不是 Route 包裹的里面
              * */}
            <Switch>
              <Route path="/page2/1" component={() => <h3>这里是子1</h3>}/>
              <Route path="/page2/2" component={() => <h3>这里是子2</h3>}/>
              {/*在router4中实现indexRedirect功能使用Redirect实现，但是需要嵌套在switch中使用*/}
              <Redirect to="/page2/1" />
            </Switch>
        </div>
    </Router>
   </div>
   )}

   export default ChildRouter