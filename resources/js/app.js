/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "../css/agency.min.css";
import "../css/bootstrap.css"
import "../img/Modern-Texas.jpg";
import "../img/map-image.png";
import VueRouter from 'vue-router';
import { routes } from './routes';
import vuetify from './plugins/vuetify'
import store from './store/store'


require('./bootstrap');
window.Vue = require('vue');

Vue.use(VueRouter);


const router = new VueRouter({
    //mode: "history",
    routes
});



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('Posts', require('./components/Posts.vue').default);
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('mainapp', require('./components/MainApp.vue').default);
Vue.component('portfolio', require('./components/Portfolio.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('contact', require('./components/Contact.vue').default);

//Stocktrader




const app = new Vue({
    el: '#app',
    router,
    vuetify,
    store

});
