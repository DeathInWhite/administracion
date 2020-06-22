<template>
    <div>
        <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        app
        >
        <v-app-bar-nav-icon
            v-if="primaryDrawer.type !== 'permanent'"
            @click.stop="esconderSidebar"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    name:'Navbar',
    data:()=>({

    }),
    computed:{
        ...mapState(['primaryDrawer'])
    },
    methods: {
        ...mapMutations(['esconderSidebar'])
    }
}
</script>