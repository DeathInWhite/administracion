<template>
  <div class="home">
      <h1>Lista de tareas de prueba</h1>
      <div v-for="(item,index) in tareas" :key="index">
        <v-btn text :to="'/editar/'+(item.id)">{{item.nombre}}</v-btn>
      </div>
  </div>
</template>

<script>

import {mapState,mapActions,mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return{
      
    }
  },
  methods: { 
    ...mapActions(['getTareas'])
  },
  computed: { 
    ...mapState(['tareas'])
  },
  created() {
    this.getTareas()
  }
}
</script>
