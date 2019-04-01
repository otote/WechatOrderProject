import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import OrderManager from '@/components/index/OrderManager'
import MoneyManager from '@/components/index/MoneyManager'
import GoodManager from '@/components/index/GoodManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index/OrderManager',
      name: 'OrderManager',
      component: OrderManager
    },
    {
      path: '/index/MoneyManager',
      name: 'MoneyManager',
      component: MoneyManager
    },
    {
      path: '/index/GoodManager',
      name: 'GoodManager',
      component: GoodManager
    }
  ]
})
