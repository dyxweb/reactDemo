import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import request from '../utils/request';
import List from '../components/List';


const IndexPage = ({ dispatch, index }) => {
 function click() {
   const fetchs=[1,2,3,4,5]
   const arr=fetchs.map(item=>{
     return dispatch({
       type:'index/fetch',
       payload:item
     })
   })  //dva版本大于2

   Promise.all(arr).then(data=>{
     dispatch({
       type:'index/save',
       payload:data
     })
   })
 }
 console.log(1)
  return (
    <div>
      <Button type="primary" onClick={()=>click()}>点击获取users</Button>
      <List index={index} />
    </div>
  );
};

IndexPage.propTypes = {
};

export default connect(({ index }) => ({
  index
}))(IndexPage);
