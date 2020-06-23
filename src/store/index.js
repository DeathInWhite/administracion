import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//Variables
    primaryDrawer: { "model": true, "type": "default (no property)", "clipped": true, "floating": false, "mini": false },
    tareas:[]
  },
  mutations: {//para modificar datos
    esconderSidebar(state){ 
      state.primaryDrawer.model = !state.primaryDrawer.model
    },
    setTareas(state,payload){
      state.tareas = payload
    }
  },
  actions: {//para obtener datos
    getTareas({commit}){
      const tareas = []
      db.collection('tareas').get().then(res => {
        res.forEach(doc =>{
          let tarea = doc.data()
          tarea.id = doc.id 
          tareas.push(tarea)
        })
        commit('setTareas',tareas)
      })
    },
    getTarea({commit},idTarea){
      db.collection('tareas').doc(idTarea).get().then(doc=>{
        console.log(doc.data())
      })
    }
  },
  modules: {
  }
})
