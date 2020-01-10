import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify)
Vue.use(VueRouter)

import App          from '../views/App'
import Dashboard    from '../views/UserProfile'
import Login        from '../views/Login'
import Register     from '../views/Register'
import Home         from '../views/Welcome'



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/board',
            name: 'board',
            component: Dashboard,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    vuetify: new Vuetify({}),
    router,
});