import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

// import "ui-component/lib/style/index.css"
// import UIComponent from 'ui-component'
// Vue.use(UIComponent)

import { 
  testA,
  testB
} from 'ui-component';
Vue.use(testA);
Vue.use(testB);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
