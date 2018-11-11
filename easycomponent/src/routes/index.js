import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Tab from './tab';
import Gotop from './gotop';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/tab">tab</Link></li>
                <li><Link to="/gotop">gotop</Link></li>
            </ul>
            <Switch>
                <Route path="/tab" component={Tab}/>
                <Route path="/gotop" component={Gotop}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;