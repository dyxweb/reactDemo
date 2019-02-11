import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Layout from './layout'

class RoutingNested extends React.Component {
	
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/" component={Layout} />               
            </Switch>
           </Router>
        )  
      }
}

export default RoutingNested