import Home from './Home';
import Test from './Test';

Home.loadData = (store) => {
  return store.dispatch({
    type: 'CHANGE_LIST',
    list: [2, 4, 6] 
  })
}
export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData, 
    key: 'home'
  },
  {
    path: '/test',
    component: Test,
    exact: true,
    key: 'test'
  }
]