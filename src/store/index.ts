import { createStore } from "vuex";

type ListData = {
    [propName: string]: number
}

export interface IState {
  listData: ListData,
  num: number
}

export default createStore<IState>({
  state: {
    listData: {
      1: 10,
    },
    num: 10,
  },
  mutations: {
    setData(state, value) {
      state.listData = value
    },
    addNum(state) {
      state.num = state.num + 10
    },
  },
  actions: {
    setData(context, value) {
      context.commit('setData', value)
    },
  },
})