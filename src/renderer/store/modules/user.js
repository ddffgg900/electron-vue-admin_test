import { login, getInfo } from '@/api/login'
import { getToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: {
      id: 1,
      name: 'sdsafdf'
    },
    avatar: '',
    roles: [],
    logged: false,
    selected_stations: []
  },

  mutations: {
    /* SET_TOKEN: (state, token) => {
      state.token = token
    }, */
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_LOGGED: (state, logged) => {
      state.logged = logged
    },
    /* SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }, */
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录

    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          // const data = response.data
          // console.log(response)
          // setToken(data.token)
          // commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    /* GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }, */
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          // console.log(data)
          if (data.logged) { // 验证返回的roles是否是一个非空数组
            commit('SET_LOGGED', data.logged)
          } else {
            reject(new Error('getInfo: need login'))
          }
          commit('SET_NAME', data.name)
          commit('SET_ROLES', data.roles)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      /* return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      }) */
      // commit('SET_TOKEN', '')
      console.log('SET_LOGGED')
      commit('SET_LOGGED', false)
      sessionStorage.setItem('logged', false)
      // removeToken()
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        // commit('SET_TOKEN', '')
        // removeToken()
        sessionStorage.setItem('logged', false)
        commit('SET_LOGGED', false)
        resolve()
      })
    }
  }
}

export default user
