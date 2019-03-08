import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import { Tabs } from 'antd';
import FourthDetail from '../fourth/detail'
const TabPane = Tabs.TabPane;

 class List1 extends React.Component {

   constructor(props){
     super(props)
     this.state={
       bookList:[]
     }
   }

  callback =(key)=>{
    this.props.history.push(`/fourth/${key}`);
    // this.context.router.push(`/fourth/${key}`);
  }


  render(){
    return (
      <div>
        <Tabs defaultActiveKey="detail" onChange={this.callback}>
          <TabPane tab="Tab 1" key="detail">1</TabPane>
          <TabPane tab="Tab 2" key="manger">2</TabPane>
        </Tabs>
        <Switch>
          <Route path="/fourth/:a" component={FourthDetail} />
          <Redirect to="/fourth/detail" />
        </Switch>
    </div>
    )
  }
}

List1.contextTypes = {
  router: PropTypes.object.isRequired
};

export default List1