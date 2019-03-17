import React from "react";
import styles from '../../styles/index.less';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import SecondId from '../second/secondId'

const Second = (props) => <div className={styles.number}>
  第一个示例的第【1】个路由，第一个路由在第一个和第二个url里都会显示，但不在第三个显示
  <Switch>
    <Route path="/second/:id" component={SecondId} />
    <Redirect to="/second/a" />
  </Switch>
</div>
export default Second