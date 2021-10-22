import React from 'react';
import ReduxContext from './reduxContext';

export default function useConnect(mapStoreToState = () => {}){
  /* 获取 Store 内部的重要函数 */
  const contextValue = React.useContext(ReduxContext)
  const { getInitState, subscribe, unSubscribe, dispatch } = contextValue
  /* 用于传递给业务组件的 state  */
  const stateValue = React.useRef(getInitState(mapStoreToState))

  /* 渲染函数 */
  const [,forceUpdate] = React.useState()
  /* 产生 */
  const connectValue = React.useMemo(() => {
    const state =  {
      /* 用于比较一次 dispatch 中，新的 state 和 之前的state 是否发生变化  */
      cacheState: stateValue.current,
      /* 更新函数 */
      update: function(newState) {
        /* 获取订阅的 state */
        const selectState = mapStoreToState(newState)
        /* 浅比较 state 是否发生变化，如果发生变化， */
        // const isEqual = shallowEqual(state.cacheState,selectState)
        const isEqual = false
        state.cacheState = selectState
        stateValue.current = selectState
        /* 更新 */
        forceUpdate({})
      }
    }
    return state
  }, [contextValue]) // 将 contextValue 作为依赖项。

  React.useEffect(() => {
    /* 组件挂载——注册 connect */
    const name = subscribe(connectValue)
    return function() {
      /* 组件卸载 —— 解绑 connect */
      unSubscribe(name)
    }
  }, [connectValue]) /* 将 connectValue 作为 useEffect 的依赖项 */

  return [stateValue.current, dispatch]
}