/**
 * Created by chengfan on 2017/6/6.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id:action.id
                }
            ]
        case COMPLETE_TODO:
            return state.map(todo =>
        (todo.id === action.index)
          ? {...todo, completed: !todo.completed}
          : todo
      )

        default:
            return state
    }
}
//combineReducer的内容是映射到UI组件中state中关键字眼
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp