import axios from 'axios'
import Vue from 'vue';
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
 
    require('bootstrap');
} catch (e) {}

import vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import routes from './router'

Vue.component('Navigations', require('./components/Navigations.vue').default);
const app = new Vue({
    el: '#zall',
    router: new VueRouter(routes),

});
