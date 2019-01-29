import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css
import '@/permission' // permission control

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true
}

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
  process.env.BASE_API = 'https://www.easy-mock.com/mock/5c4fe53c7f9dd150e65ed74a/api'
  process.env.BASE_WS = ''
  process.env.UPDATE = ''
} else {
  process.env.BASE_API = 'https://www.easy-mock.com/mock/5c4fe53c7f9dd150e65ed74a/api'
  process.env.BASE_WS = 'ws://localhost:9080/ws'
  process.env.UPDATE = 'ws://localhost:9080/update'
}
// process.noDeprecation = true
