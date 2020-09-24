import Vue from 'vue';
import VueRouter from 'vue-router';

import Homepage from './components/Homepage.vue';
import Dashbord from './components/dashbord/Dashbord.vue';

Vue.use(VueRouter)

const routes = [
    {path:'/', component:Homepage},
    {path:'/Dashbord', component:Dashbord}
]

export default new VueRouter({mode:'history', routes})
