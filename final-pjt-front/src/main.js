import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'


import VueCarousel from "vue-carousel";
import Carousel3d from "vue-carousel-3d";

Vue.use(VueGlide)
Vue.use(VueCarousel);
Vue.use(Carousel3d);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
