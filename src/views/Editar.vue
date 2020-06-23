<template>
    <div>
        <h1>Edicion de tarea: {{id}}</h1>
    </div>    
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:'Editar',
    data() {
        return{
            id:this.$route.params.id
        }
    },
    methods: { 
        ...mapActions(['getTarea']) 
    },
    created() {
        this.getTarea(this.id)
    }
}
</script>