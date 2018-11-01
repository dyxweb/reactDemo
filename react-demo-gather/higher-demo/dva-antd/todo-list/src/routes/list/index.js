import React from 'react';
import { connect } from 'dva';
import List from '../../components/List';
import Add from '../../components/Add';

const Lists = ({ dispatch, lists, inputs }) => {
  function handleDelete(id) {
    dispatch({
      type: 'lists/delete',
      payload: id,
    });
  }
  function handleAdd(f) {
  	for(var i=0;i<f;i++){
    dispatch({
      type: 'lists/add',
      payload: inputs.input,
    });
   }
  }

  function handelChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value,
    });
  }
  return (
    <div>
      <Add onAdd={handleAdd} onChange={handelChange} input={inputs.input} />
      <br />
      <hr />
      <h2>List of Products</h2>
      <br />
      <List onDelete={handleDelete} lists={lists} dispatch={dispatch} />
    </div>
  );
};

// export default Lists;
export default connect(({ inputs, lists }) => ({
  inputs, lists,
}))(Lists);
