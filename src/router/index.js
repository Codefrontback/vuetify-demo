import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VuetifyAlertComponent from '@/components/VuetifyAlertComponent.vue'
import DataTable from '@/components/DataTableComponent.vue'
import VuetifyForm from '@/components/FormComponent.vue'
import Snackbar from '@/components/SnackbarComponent.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
            path: '/alert-component',
            name: 'vuetifyAlert',
            component: VuetifyAlertComponent
        },
        {
            path: '/datatable',
            name: 'datatable',
            component: DataTable
        },
        {
            path: '/form',
            name: 'form',
            component: VuetifyForm
        },
        {
            path: '/snackbar',
            name: 'snackbar',
            component: Snackbar
        },
    ]
})
