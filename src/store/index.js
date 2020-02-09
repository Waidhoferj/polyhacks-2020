import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    userData: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserData(state, data) {
      state.userData = data;
    }
  },
  actions: {},
  modules: {}
});
