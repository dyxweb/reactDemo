/**
 * Created by guangqiang on 2017/12/19.
 */
import {actionTypes} from '../common/actionTypes'

const initialState = {
  count: 0
}

function getTodoCount(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TODO_COUNT:
      return state
    default:
      return state
  }
}

export default getTodoCount