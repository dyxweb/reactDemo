import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import UseStateDemo from '../containers/UseStateDemo';
import UseEffectDemo from '../containers/UseEffectDemo';
import UseMemoDemo from '../containers/UseMemoDemo';
import UseCallbackDemo from '../containers/UseCallbackDemo';
import UseContextDemo from '../containers/UseContextDemo';
import CaptureValueDemo from '../containers/CaptureValue';
import UseRefDemo from '../containers/UseRefDemo';
import UseReducerDemo from '../containers/UseReducerDemo';
import UseImperativeHandleDemo from '../containers/UseImperativeHandleDemo';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/state">useState</Link>&nbsp;
          <Link to="/effect">useEffect</Link>&nbsp;
          <Link to="/ref">useRef</Link>&nbsp;
          <Link to="/useImperativeHandle">useImperativeHandle</Link>&nbsp;
          <Link to="/memo">useMemo</Link>&nbsp;
          <Link to="/callback">useCallback</Link>&nbsp;
          <Link to="/context">useContext</Link>&nbsp;
          <Link to="/reducer">useReducer</Link>&nbsp;
          <Link to="/capture">capture value</Link>
          <hr />
          <Switch>
            <Route path="/state" component={UseStateDemo} />
            <Route path="/effect" component={UseEffectDemo} />
            <Route path="/memo" component={UseMemoDemo} />
            <Route path="/callback" component={UseCallbackDemo} />
            <Route path="/context" component={UseContextDemo} />
            <Route path="/capture" component={CaptureValueDemo} />
            <Route path="/ref" component={UseRefDemo} />
            <Route path="/useImperativeHandle" component={UseImperativeHandleDemo} />
            <Route path="/reducer" component={UseReducerDemo} />
            <Redirect from='/' to='/state' />               
          </Switch>
        </div>
      </Router>
    )  
  }
}

export default App;