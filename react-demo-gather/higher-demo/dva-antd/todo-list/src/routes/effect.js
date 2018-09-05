import dva, { connect } from 'dva';
import React from 'react';
import  './effect.css';

const CountApp = ({count, dispatch}) => {
	
	function handleAdd(f) {
  	for(var i=0;i<f;i++){
    dispatch({type: 'count/add'})
   }
  }
  return (
    <div className="normal">
      <div className="record">Highest Record: {count.record}</div>
      <div className="current">{count.current}</div>
      <div className="button">
        <button onClick={()=>handleAdd(4)}>+</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}
export default connect(mapStateToProps)(CountApp);


