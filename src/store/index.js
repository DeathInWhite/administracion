import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//Variables
    primaryDrawer: { "model": true, "type": "default (no property)", "clipped": true, "floating": false, "mini": false },
  },
  mutations: {//para modificar datos
    esconderSidebar(state){ 
      state.primaryDrawer.model = !state.primaryDrawer.model
    }
  },
  actions: {//para obtener datos
    getTareas({commit}){
      db.collection('tareas').get().then(res => {
        res.forEach(doc =>{
          console.log(doc.id)
          console.log(doc.data())
        })
      })
    }
  },
  modules: {
  }
})
