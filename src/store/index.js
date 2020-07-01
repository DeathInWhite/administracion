import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//Variables
    primaryDrawer: { "model": true, "type": "default (no property)", "clipped": true, "floating": false, "mini": false },
    tareas:[],
    tarea:{},
    //Prueba
    familias:[]
  },
  mutations: {//para modificar datos
    esconderSidebar(state){ 
      state.primaryDrawer.model = !state.primaryDrawer.model
    },
    setTareas(state,payload){
      state.tareas = payload
    },
    setTarea(state,payload){
      state.tarea = payload
    },
    //prueba
    setFamilias(state,payload){
      state.familias = payload
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
        let tarea = doc.data()
        tarea.id = doc.id
        commit('setTarea',tarea)
      })
    },
    editarTarea({commit},tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre : tarea.nombre
      }).then(()=>{
        router.push('/')
      })
    },
    //Prueba
    getFamilias({commit}){
      const familias = []
      db.collection('Familias').get().then(res => {
        res.forEach(doc =>{

          let familia = doc.data()
          familia.id = doc.id 
          familias.push(familia)

          // db.collection('Familias').doc(doc.id).collection('Alumno').get().then(res=>{
          //   res.forEach(doc=>{
          //     console.log(doc.data())
          //   })
          // })

        })
        commit('setFamilias',familias)
      })
    }
  },
  modules: {
  }
})
