import Vue from 'vue'
import Vuex from 'vuex'
// import { createPersistedState } from 'vuex-electron'

import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters,
  plugins: [
    // createPersistedState()
  ]
})

/* const store = (() => {
  return new Vuex.Store({
    modules: {
      app,
      user,
      station,
      ws
    },
    getters
  })
})() */

export default store
