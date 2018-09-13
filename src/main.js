import Vue from 'vue';
import './plugins/vuetify';
import App from './components/App.vue';
import store from './store/store';
const Vuetify = require('vuetify');
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
}).$mount('#app');
