import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from '../components/users/Users.vue';
import ConsolePage from '../components/console/ConsolePage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'index',
            redirect: '/sign_in'
        },
        {
            path: '/sign_in',
            name: 'signIn',
            component: Users
        },
        {
            path: '/sign_up',
            name: 'signUp',
            component: Users
        },
        {
            path: '/console',
            name: 'console',
            component: ConsolePage
        }
    ]
});