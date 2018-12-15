import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Link,routerRedux} from 'dva/router';

const List1 = (props) => {
	var id=location.pathname
  	id=id.split("/")
  	console.log(id)
  	var id1=id[2]
  function callback(key) {
  props.dispatch(routerRedux.push(`/list/${id1}/${key}`))
}
  return (
    <div>
     {`${id1}/${id[3]}`}
     <Tabs defaultActiveKey="detail" onChange={callback}>
    <TabPane tab="detail" key="detail"></TabPane>
    <TabPane tab="mange" key="mange"></TabPane>
  </Tabs>
      {props.children}
    </div>
  );
};

// export default Lists;
export default connect(({ list1 }) => ({
  list1,
}))(List1);
