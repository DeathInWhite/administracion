<template>
    <div>
        <h1>Familias</h1>
        {{familias}}
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
    name:'Familias',
    data() {
    return{
      
        }
    },
    methods: { 
        ...mapActions(['getFamilias'])
    },
    created() {
        this.getFamilias()
    },
    computed: { 
        ...mapState(['familias']) 
    }
}
</script>