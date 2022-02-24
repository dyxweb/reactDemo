import {createStore, combineReducers} from 'redux';
import { reducer as homeReducer } from './home/index';
//合并项目组件中store的reducer
const reducer = combineReducers({
  home: homeReducer
})

//服务端的store创建函数
export const getStore = () => {
  return createStore(reducer);
}
//客户端的store创建函数
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState);
}