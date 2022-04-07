import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrolledElement: null,
  },
  getters: {},
  mutations: {
    SET_SCROLLED_ELEMENT(state, payload = null) {
      if (payload) {
        state.scrolledElement = payload.element;
      } else {
        state.scrolledElement = null;
      }
    },
  },
  actions: {
    scroll(context, payload = null) {
      context.commit("SET_SCROLLED_ELEMENT", payload);
    },
  },
});
