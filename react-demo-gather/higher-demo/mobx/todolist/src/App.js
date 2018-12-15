import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Todolist from './route/todolist';
import Counter from './route/counter'

const RouterCon = (props) => {
  return (
      <Router>
        <div>
            <div style={{ display:'flex',justifyContent:'center'}}>
              <Link to='/counter'>Counter</Link>
              <Link to='/todo' style={{marginLeft:'24px'}}>Todolist</Link>
            </div>
            <div style={{textAlign:'center'}}>
                <Switch>
                    <Route path="/todo" component={Todolist}/>
                    <Route path="/counter" component={Counter}/>
                    <Redirect to="/counter" />
                </Switch>
            </div>
        </div>
      </Router>
)};

export default RouterCon;