import { unstable_batchedUpdates } from 'react-dom'
export default class ReduxHooksStore {
  constructor(reducer, initState) {
    this.name = '__ReduxHooksStore__'
    this.id = 0
    this.reducer = reducer
    this.state = initState
    this.mapConnects = {}
  }
  /* 需要对外传递的接口 */
  exportStore = () => {
    return {
      dispatch: this.dispatch.bind(this),
      subscribe: this.subscribe.bind(this),
      unSubscribe: this.unSubscribe.bind(this),
      getInitState: this.getInitState.bind(this)
    }
  }
  /* 获取初始化 state */
  getInitState = (mapStoreToState) => {
    return mapStoreToState(this.state)
  }
  /* 更新需要更新的组件 */
  publicRender = () => {
    unstable_batchedUpdates(() => { /* 批量更新 */
      Object.keys(this.mapConnects).forEach(name => {
        const { update } = this.mapConnects[name]
        update(this.state)
      })
    })
  }
  /* 更新 state  */
  dispatch = (action) => {
    this.state = this.reducer(this.state,action)
    // 批量更新
    this.publicRender()
  }
  /* 注册每个 connect  */
  subscribe = (connectCurrent) => {
    const connectName = this.name + (++this.id)
    this.mapConnects[connectName] = connectCurrent
    return connectName
  }
  /* 解除绑定 */
  unSubscribe = (connectName) => {
    delete this.mapConnects[connectName]
  }
}