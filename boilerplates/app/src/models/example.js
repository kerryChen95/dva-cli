
export default {
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
  },
  state: {},
  namespace: 'example',
}
