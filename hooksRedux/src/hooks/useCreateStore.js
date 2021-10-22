import React from 'react';
import ReduxHooksStore from './reduxHooksStore'

/* 用于产生 reduxHooks 的 store */
export default function useCreateStore(reducer, initState){
  const store = React.useRef(null)
  /* 如果存在——不需要重新实例化 Store */
  if(!store.current) {
    store.current = new ReduxHooksStore(reducer, initState).exportStore()
  }
  return store.current
}