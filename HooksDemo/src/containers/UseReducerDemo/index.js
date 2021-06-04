import React, { useReducer } from 'react';

const UseReducerDemo = () => {
  /* count为更新后的state值,  dispatchCount 为当前的派发函数 */
  const [count, dispatchCount] = useReducer((state, action) => {
    const { payload, type } = action
    /* return的值为新的state */
    switch(type) {
			case 'add':
				return state + 1
			case 'sub':
				return state - 1 
			case 'reset':
				return payload       
    }
    return state
  }, 0)

  return (
	  <div>
			<div>{ count }</div>
      <button onClick={() => dispatchCount({ type:'add' })}>add</button>
      <button onClick={() => dispatchCount({ type:'sub' })}>sub</button>
      <button onClick={() => dispatchCount({ type:'reset', payload: 123 })}>reset</button>
    </div>
	)
}

export default UseReducerDemo