<template>
    <div>
        <h1>Edicion de tarea: {{id}}</h1>
        {{tarea.nombre}}
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" v-model="tarea.nombre">
            <button type="submit">Editar</button>
        </form>
    </div>    
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default {
    name:'Editar',
    data() {
        return{
            id:this.$route.params.id
        }
    },
    methods: { 
        ...mapActions(['getTarea','editarTarea']) 
    },
    created() {
        this.getTarea(this.id)
    },
    computed: { 
        ...mapState(['tarea']) 
    }
}
</script>