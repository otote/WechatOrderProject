// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/theme.css'
import './assets/style/characters.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.prototype.HOST = '/api'
// 图片上传地址
Vue.prototype.UPLOAD_JPG_URL = 'https://sm.ms/api/upload'
Vue.prototype.WEBSOCKET_URL = 'ws://wechat.otote.cn'
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wechat.otote.cn'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截 携带AuthToken
axios.interceptors.request.use(request => {
  let authToken = localStorage.getItem('AuthToken')
  console.log('请求token：' + authToken)
  // 如果是上传图片 则不加authToken
  if (request.url !== Vue.prototype.UPLOAD_JPG_URL) {
    request.headers['AuthToken'] = authToken
  }
  return request
})

// 响应拦截
axios.interceptors.response.use(response => {
  // 没有权限  跳转到登陆页面
  if (response.data.statusCode === '400') {
    router.push({
      path: '/',
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  } else {
    return response
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
