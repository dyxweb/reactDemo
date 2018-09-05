import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import request from '../utils/request';
import List from '../components/List';


const IndexPage = ({ dispatch, index }) => {
 function click(f) {
 	for (var i=0;i<f;i++){
      dispatch({
        type: 'index/fetch',
      });
  }
 }
 console.log(index)
  return (
    <div>
      <Button type="primary" onClick={()=>click(5)}>点击获取users</Button>
      <List index={index} />
    </div>
  );
};

IndexPage.propTypes = {
};

export default connect(({ index }) => ({
  index
}))(IndexPage);
