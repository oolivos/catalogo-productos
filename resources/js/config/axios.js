import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = window.location.origin + '/api/'
Vue.prototype.$http = axios
export default axios
