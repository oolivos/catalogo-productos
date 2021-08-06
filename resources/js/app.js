import Vue from 'vue'
import vuetify from './config/vuetify'
import Main from './Main'
import Router from './router'
import store from "./store";
import axios from './config/axios'
import  './config/vee-validate'
new Vue({
    vuetify,
    axios,
    router: Router,
    store,
    render: h => h(Main)
}).$mount('#app')
