import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRellax from 'vue-rellax'
import VueSplide from '@splidejs/vue-splide';
import vSelect from "vue-select";



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRellax)
Vue.use(VueSplide)
Vue.component('v-select', vSelect)

new Vue({
  render: h => h(App),
}).$mount('#app')
