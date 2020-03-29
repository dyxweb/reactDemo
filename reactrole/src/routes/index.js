import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import AuthRouter from './authrouter';
import Layout from './layout';
import Login from './login';

export default class Routesas extends React.Component {
  render(){
    return (
      <Router>
          <Switch>
            <AuthRouter path="/normal" component={Layout} />
            <AuthRouter path="/manage" component={Layout} />
            <AuthRouter path="/highmanage" component={Layout} />
            <AuthRouter path="/noright" component={Layout} />
            <Route path="/login" component={Login} />
            <Redirect from='/' to='/login' />
          </Switch>
      </Router>
    )
  }
}
  