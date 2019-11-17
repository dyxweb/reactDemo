import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import FieldForm from './fieldForm';
import FieldParseForm from './fieldParseForm';
import FieldParseComplexForm from './fieldParseComplexForm';
import ControlForm from './controlForm';

const App = (props) => {
  return (
  <div>
    <Router>
      <div className="all">
        <Switch>
          <Route path="/field" component={FieldForm} />
          <Route path="/fieldparse" component={FieldParseForm} />
          <Route path="/fieldparsecomplex" component={FieldParseComplexForm} />
          <Route path="/controlform" component={ControlForm} />
          <Redirect to="/field" />
        </Switch>
      </div>
    </Router>
  </div>  
)};

export default App;