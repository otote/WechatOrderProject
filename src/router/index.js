import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import OrderManager from '@/components/index/OrderManager'

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
    }
  ]
})
