import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Normal from './Normal';
import Better from './Better';
import Best from './Best';

export default class Routesas extends React.Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/normal" component={Normal} />
            <Route exact path="/better" component={Better} />
            <Route path="/best" component={Best} />
            <Route path="/best/add" component={Best} />
            <Route path="/best/:editId/edit" component={Best} />
            <Redirect from='/' to='/normal' />
          </Switch>
      </Router>
    )
  }
}
  