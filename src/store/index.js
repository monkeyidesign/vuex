import Vue from "vue";
import Vuex from "vuex";
import initialStore from "./modules/initial/initial.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    initialStore: initialStore
  }
});
