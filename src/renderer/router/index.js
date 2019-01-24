import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

import { getToken } from '@/utils/auth'

import { Message } from 'element-ui'

import store from '@/store'

import '@/mock' // 假数据

const Layout = resolve => require(['@/views/Layout'], resolve)
const Login = resolve => require(['@/views/Login'], resolve)
const Code404 = resolve => require(['@/views/404'], resolve)

// import Layout from '@/views/Layout'
const Dashboard = resolve => require(['@/views/Dashboard'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Login',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: Code404,
      hidden: true
    },
    {
      path: '/',
      redirect: '/Dashboard',
      name: '总览',
      component: Layout,
      children: [{
        path: 'dashboard',
        meta: { title: '总览', icon: 'example' },
        component: Dashboard
      }]
    }
  ]
})

const whiteList = ['/Login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log('NProgress.start()')
  console.log(getToken())
  if (getToken()) {
    if (to.path === '/Login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    console.log(whiteList.indexOf(to.path) !== -1)
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/Login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
