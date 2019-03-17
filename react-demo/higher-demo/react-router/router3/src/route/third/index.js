import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'

// React component
class Counter extends Component {

  render() {
    //定义里面的两个函数value，onIncreaseClick
    const { value, onIncreaseClick,name,dispatch,onqueryClick } = this.props
    return (
    <div>
      <span>{value}</span>
      <button onClick={onIncreaseClick}>Increas</button>
      <div>
	      <span>{name}</span>
	      <button onClick={onqueryClick}>query</button>
      </div>
      {this.props.children}
    </div>
    )
  }
}
//counter中函数内的属性设置

// Action
const increaseAction = { type: 'increase' }
const querystart = { type: 'querystart',text:'.........' }
function query(text) {
    return { type: 'query', text }
}

// Reducer
function counter(state = { count: 0,name:'' }, action) {
  const {count,name} = state
  switch (action.type) {
    case 'increase':
      return { ...state,count: count + 1 }
      break;
    case 'query':
      return { ...state,name:action.text  }  
      break;
    case 'querystart':
      return {...state,name:action.text  }  
      break;  
    default:
      return state
   }
}

// Store
export const store = createStore(counter)
// Map Redux state to component props
//value到state的映射 
function mapStateToProps(state) {
  return {
    value: state.count,
    name: state.name
  }
}
// Map Redux actions to component props
//onIncreaseClick到dispatch的映射
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onqueryClick: () => {
    	console.log('dispatching', querystart);
    	dispatch(querystart)
		  fetch('http://localhost:8080/user.json').then(response=> 
        response.json()
     ).then(data =>{
       dispatch(query(data.name))
   }
    )
	}
  }
}

// Connected Component
//将这输入逻辑与输出逻辑组件连接起来
const App = connect(
   mapStateToProps,
   mapDispatchToProps
)(Counter)

export default App