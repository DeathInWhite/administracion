<template>
    <div>
        <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        overflow
        >
            <v-list dense nav>
                <v-list-item link :to="item.link" v-for="(item,index) in items" :key="index">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'Sidebar',
    data:()=>({
        items: [
            { title: 'Principal', icon: 'mdi-view-dashboard',link:'/'},
            { title: 'About', icon: 'mdi-view-dashboard',link:'/about'},
            { title: 'Familias', icon: 'mdi-view-dashboard',link:'/familias'},
        ]
    }),
    computed:{
        ...mapState(['primaryDrawer'])
    }
}
</script>