import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
import App from './App'

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
   vuetify,
   render: h=>h(App)
}).$mount('#app');
