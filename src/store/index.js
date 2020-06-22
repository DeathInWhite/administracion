import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primaryDrawer: { "model": true, "type": "default (no property)", "clipped": true, "floating": false, "mini": false },
  },
  mutations: {
    esconderSidebar(state){ 
      state.primaryDrawer.model = !state.primaryDrawer.model
    }
  },
  actions: {
  },
  modules: {
  }
})
