import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueRouter from "vue-router";
Vue.use(VueRouter)

/*Swiper*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

/*Vue awesome icons*/
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

/*Bootstrap*/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
