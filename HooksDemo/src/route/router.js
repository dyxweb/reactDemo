import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UseStateDemo from '../containers/UseStateDemo';
import UseEffectDemo from '../containers/UseEffectDemo';
import UseMemoDemo from '../containers/UseMemoDemo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/state" component={UseStateDemo} />
          <Route path="/effect" component={UseEffectDemo} />
          <Route path="/memo" component={UseMemoDemo} />
          <Redirect from='/' to='/state' />               
        </Switch>
      </Router>
    )  
  }
}

export default App;