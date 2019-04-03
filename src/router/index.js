import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import OrderManager from '@/components/index/OrderManager'
import MoneyManager from '@/components/index/MoneyManager'
import GoodManager from '@/components/index/goodmanager/GoodManager'
import Good from '@/components/index/goodmanager/Good'
import CreateGood from '@/components/index/goodmanager/CreateGood'
import SortManager from '@/components/index/goodmanager/SortManager'
import EditorGoodInfo from '@/components/index/goodmanager/EditorGoodInfo'

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
    },
    {
      path: '/index/GoodManager/Good',
      name: 'Good',
      component: Good
    },
    {
      path: '/index/GoodManager/CreateGood',
      name: 'CreateGood',
      component: CreateGood
    },
    {
      path: '/index/GoodManager/SortManager',
      name: 'SortManager',
      component: SortManager
    },
    {
      path: '/index/GoodManager/EditorGoodInfo',
      name: 'EditorGoodInfo',
      component: EditorGoodInfo
    }
  ]
})
