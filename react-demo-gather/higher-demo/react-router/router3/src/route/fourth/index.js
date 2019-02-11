import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

 class List1 extends React.Component {

   constructor(props){
     super(props)
     this.state={
       bookList:[]
     }
   }

  callback =(key)=>{
    // router.push的时候使用hashhistory不用加#，直接写后面的路由
    hashHistory.push(`/fourth/${key}`);
    // this.context.router.push(`/fourth/${key}`);
  }


  render(){
    return (
      <div>
        <Tabs defaultActiveKey="detail" onChange={this.callback}>
          <TabPane tab="Tab 1" key="detail">1</TabPane>
          <TabPane tab="Tab 2" key="manger">2</TabPane>
        </Tabs>
        {this.props.children}
    </div>
    )
  }
}

List1.contextTypes = {
  router: PropTypes.object.isRequired
};

export default List1