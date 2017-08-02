import * as IpService from '../services/ip'
export default {
  namespace: 'ip',
  state: {
    modalVisible: false,
    table: [],
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen((location) => {
        if(location.pathname==='/ip'){
          dispatch({
            type:'fetch'
          })
        }
      })
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      const { data, err} = yield call(IpService.query, payload)
      if(data){
        yield put({type: 'save', payload:data });
      }
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },
};
