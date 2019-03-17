import request from '../utils/request';
export default {

  namespace: 'index',

  state: [],

  effects: {
    *fetch({ payload }, { put, call, select }) {// eslint-disable-line

        var data = yield call(request,'/users');
        return new Promise((res)=>{
          res(data)
        })
    },
  },

  reducers: {
    save(state, action) {
      return [...state, ...action.payload];
    },
  },

};
