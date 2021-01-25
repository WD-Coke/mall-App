import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false//构建产品时时都显示提示信息

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
