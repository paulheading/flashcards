import Vue from 'vue'
import app from './app'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
  store,
}).$mount('#app')
