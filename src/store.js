import Vue from "vue";
import Vuex from "vuex";

import news from "./data.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { news },
  getters: {
    getNewsFeed(state) {
      return state.news;
    },
    getNewsById: (state) => (id) => {
      const news = state.news.find((n) => n.id === id);
      return news;
    },
  },
  mutations: {
    ADD_NEWS(state, payload) {
      state.news = [...state.news, payload];
    },
    UPDATE_NEWS(state, payload) {
      const getDataWithoutID = state.news.filter((n) => n.id !== payload.id);
      console.log(getDataWithoutID);
      state.news = [...getDataWithoutID, payload];
    },
  },
  actions: {
    addNews({ commit }, newNewsItem) {
      commit("ADD_NEWS", newNewsItem);
    },
    updateNews({ commit }, updateNewsItem) {
      commit("UPDATE_NEWS", updateNewsItem);
    },
  },
});
export default store;
