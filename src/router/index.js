import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from '../components/users/Sign.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/sign_in'
    },
    {
        path: '/sign_in',
        component: Users
    },
    {
        path: '/sign_up',
        component: Users
    }]
});