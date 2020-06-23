<template>
  <v-app id="sandbox">
    <Sidebar/>

    <Navbar/>

    <v-main>
      <router-view/>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Sidebar from '@/components/Sidebar'
  import Footer from '@/components/Footer'

  import {mapActions} from 'vuex'

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
    created() {
      this.getTareas()
    },

  }
</script>