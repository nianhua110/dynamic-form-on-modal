import * as IpService from "../services/ip";
export default {
  namespace: 'ip',
  state: {
    modalVisible: false,
    table: [],
    servicesList: [],
    ipList: [],
    curItem: {},
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/ip') {
          dispatch({
            type: 'fetch'
          })
        }
      })
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      const {data, err} = yield call(IpService.query, payload)
      if (data) {
        yield put({type: 'save', payload: data});
      }
    },
    *fetchIpList({payload}, {call, put}) {  // eslint-disable-line
      const {data, err} = yield call(IpService.queryIpsByService, payload)
      if (data) {
        yield put({type: 'save', payload: data});
      }
    },
    *showModal({payload}, {call, put}) {  // eslint-disable-line
      if (payload.type === 'edit') {
        const {data, err} = yield call(IpService.queryIpsByService, {id: payload.curItem.id})
        if (data) {
          yield put({type: 'save', payload: data});
        }
      }
      yield put({type: 'save', payload})

    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },
};
