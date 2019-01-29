import Vue from 'vue'
import Router from 'vue-router'

// import '@/mock' // 假数据

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

export default router
