import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

if (process.env.NODE_ENV === 'development') {
  process.env.BASE_API = ''
  process.env.BASE_WS = ''
  process.env.UPDATE = ''
} else {
  process.env.BASE_API = 'http://localhost:9080/api'
  process.env.BASE_WS = 'ws://localhost:9080/ws'
  process.env.UPDATE = 'ws://localhost:9080/update'
}
