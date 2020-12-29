import axios from 'axios'
import router from '@/router/routers'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Config from '@/settings'
import Cookies from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API + '/api' : '/dev-api', // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(

  config => {
    if (getToken()) {
      config.headers[Config.TokenHeader] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    const code = res.code
    if (res.code !== 20000) {
      if (code === 401) {
        store.dispatch('logout').then(() => {
          // 用户登录界面提示
          Cookies.set('point', 401)
          location.reload()
        })
      } else {
        Message.error(res.message || '请求失败')
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }

    return res
  },
  error => {
    if (error.toString().indexOf('Error: timeout') !== -1) {
      Message.error('网络请求超时')
    } else {
      Message.error('服务器异常')
    }
    return Promise.reject(error)
  }
)

export default service
