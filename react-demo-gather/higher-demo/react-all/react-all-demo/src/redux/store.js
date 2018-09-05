import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';
//中间件applyMiddleware(thunkMiddleware)进行异步操作
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
let lis=()=>console.log("subscribe")
store.subscribe(lis)

export default store;