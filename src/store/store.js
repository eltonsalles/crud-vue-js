import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutation';
import actions from './actions';
import home from './modules/home/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    home,
  },
});
