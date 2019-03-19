import Vue from 'vue'
import Router from 'vue-router'
import Top from './pages/top/Top'
import Sandbox01 from './pages/sandbox01/Sandbox01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Top.name,
      component: Top
    },
    {
      path: '/sandbox01',
      name: Sandbox01.name,
      component: Sandbox01
    },
  ]
})
