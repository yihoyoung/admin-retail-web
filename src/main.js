import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueLogger from 'vuejs-logger'
import router from './router.js'

Vue.use(ElementUI)
Vue.use(vueLogger)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
