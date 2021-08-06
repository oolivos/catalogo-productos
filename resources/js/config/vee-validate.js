import Vue from 'vue'
import VeeValidate, { ValidationProvider, ValidationObserver, Validator } from "vee-validate/dist/vee-validate"
import es from 'vee-validate/dist/locale/es'
Vue.use(VeeValidate)
Validator.localize('es', es);
Vue.component('Validator', ValidationProvider)
Vue.component('ValidatorObserver', ValidationObserver)
