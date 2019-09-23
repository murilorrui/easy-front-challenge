import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    TOKEN(store, token) {
      store.token = token;
    },
  },
  getters: {
    token: (state => state.token),
  },
  actions: {
    setToken({ commit }, token) {
      commit('TOKEN', token);
    },
  },
});
