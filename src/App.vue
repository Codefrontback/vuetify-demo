<template>
    <v-app>
        <v-toolbar class="deep-purple">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
            <v-toolbar-title class="text--darken-1">Artixun Softwares</v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat dark><router-link :to="{name: 'home' }">Home</router-link></v-btn>
                <v-btn flat dark><router-link :to="{name: 'vuetifyAlert'}">Alert Component</router-link></v-btn>
                <v-btn flat dark><router-link :to="{name: 'datatable'}">Datatable Component</router-link></v-btn>
                <v-btn flat dark><router-link :to="{name: 'form'}">Form Component</router-link></v-btn>
                <v-btn flat dark><router-link :to="{name: 'snackbar'}">Snackbar Component</router-link></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>

        <!--Vue drawer component-->
        <v-navigation-drawer
            temporary
            v-model="drawer"
            :mini-variant.sync="mini"
            light
            absolute
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                         <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                         </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer class="pa-3 deep-purple">
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                mini: false,
            }
        }
    }
</script>
<style scoped>
    a{
        color:white !important;
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    .text--darken-1{
        color:white;
    }
    .pa-3{
        color:white;
    }
</style>
