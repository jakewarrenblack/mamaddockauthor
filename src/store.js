import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrolledElement: null,
    loading: true,
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
    SET_LOADING(state, payload = null) {
      if (payload) {
        state.loading = payload.isLoading;
        document.querySelector("html").style.overflowY = "scroll";
      }
    },
  },
  actions: {
    scroll(context, payload = null) {
      context.commit("SET_SCROLLED_ELEMENT", payload);
    },
    setLoading(context, payload = null) {
      context.commit("SET_LOADING", payload);
    },
  },
});
