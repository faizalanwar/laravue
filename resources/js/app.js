

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('Navigations', require('./components/Navigations.vue').default);
const app = new Vue({
    el: '#zall',
});
