import request from '../utils/request';
export default {

  namespace: 'index',

  state: [],

  effects: {
    *fetch({ payload }, { put, call, select }) {// eslint-disable-line
      try{
        var data = yield call(request,'/users');
      }catch(e){
      	
      }
      yield put({ type: 'save',payload: data, });
    },
  },

  reducers: {
    save(state, action) {
      return [...state, ...action.payload];
    },
  },

};
