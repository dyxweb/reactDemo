import {INCREMENT, DECREMENT, RESET} from '../actions/counter';

/*
* 初始化state
 */

const initState = {
    count: 0
};
/*
* reducer
 */
//export default function reducer(state = initState, action) {
//  switch (action.type) {
//      case INCREMENT:
//          return {
//              count: state.count + 1
//          };//此种return的形式是一个对象的形式对应initState
//      case DECREMENT:
//          return {
//              count: state.count - 1
//          };
//      case RESET:
//          return {count: 0};
//      default:
//          return state
//  }
//}
//上述两种传入state初始状态的形式对应到UI组件的使用（props）也不同，在reducer中对state的修改形式也不同
export default function reducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state+1//此种return直接对应state的值，在这里return不能有{}可以有()
        case DECREMENT:
            return state=state-1
        case RESET:
            return state=0
        default:
            return state
    }
}