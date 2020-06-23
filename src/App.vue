<template>
  <v-app id="sandbox">
    <Sidebar/>

    <Navbar/>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Sidebar from '@/components/Sidebar'
  import Footer from '@/components/Footer'

  import {mapActions,mapState, mapGetters} from 'vuex'

  export default {
    components: {
      Navbar,Sidebar,Footer
    },
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: { "model": true, "type": "default (no property)", "clipped": true, "floating": false, "mini": false },
      footer: {
        inset: true,
      },
    }),
    methods: {
      ...mapActions(['getTareas'])
    },
    computed: { 
      ...mapState(['tareas'])
    },
    created() {
      this.getTareas()
    },

  }
</script>