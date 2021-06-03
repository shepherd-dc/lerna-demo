import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {
  testA,
  testB
} from 'ui-component'

Vue.config.productionTip = false
Vue.use(testA)
Vue.use(testB)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
