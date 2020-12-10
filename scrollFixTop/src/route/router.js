import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import AllPageScroll from '../containers/AllWidth/PageScroll';
import AllContentScroll from '../containers/AllWidth/ContentScroll';
import PartPageScroll from '../containers/PartWidth/PageScroll';
import PartContentScroll from '../containers/PartWidth/ContentScroll';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/allpage" component={AllPageScroll} />
            <Route path="/allcontent" component={AllContentScroll} />
            <Route path="/partpage" component={PartPageScroll} />
            <Route path="/partContent" component={PartContentScroll} />
            <Redirect from='/' to='/allpage' />               
          </Switch>
        </div>
      </Router>
    )  
  }
}

export default App;