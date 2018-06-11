import axios from 'axios'
import localforage from 'localforage'

// 所属环境
const ENV = process.env.NODE_ENV

// 默认超时时间
const TIME_OUT = 10000

// 创建axios实例
const service = axios.create({
  timeout: TIME_OUT
})

// 不需要权限验证拦截的白名单请求
const whiteList = ['/login']

// request 请求发送之前 拦截器
service.interceptors.request.use(async config => {

  // TODO 发送请求之前，进行权限验证

  // let url = config.url
  // let inWhite = whiteList.filter(item => url.indexOf(item) > -1)
  //
  // if (!(inWhite && inWhite.length > 0)) {
  //   const accessToken = await localforage.getItem('access_token')
  //   if (accessToken) {
  //     // TODO 后台添加 header ： access_token
  //     config.headers.access_token = accessToken // 让每个请求携带 accessToken
  //   } else {
  //     // 无权限，跳转到登录页
  //     window.location.reload()
  //   }
  //
  // }

  return config
}, error => {
  // Do something with request error
  console.log('发送请求错误', error)
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    console.log('收到请求反馈', response)
    if (response) {
      // 检查状态
      if (response.status >= 200 && response.status < 400) {
        return response.data
      } else {
        console.log('返回错误', response)
      }
    } else {
      console.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    console.error(ENV === 'development' ? '服务器端产生错误！' : '网络因素，请稍后重试！')
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

export default service
