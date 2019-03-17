import {createStore} from 'redux'
import login from './login/reducers.js'
let store = createStore(login)
export default store;