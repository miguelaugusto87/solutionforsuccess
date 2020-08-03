import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Ionic from '@ionic/vue';


Vue.use(VueResource);
Vue.use(Ionic);

new Vue({
  el: '#app',
  render: h => h(App)
})
