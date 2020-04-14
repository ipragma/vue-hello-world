import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
App.vuetify = vuetify
Vue.customElement('vue-hello-world', App)