import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 自定义插件
import Loading from './plugin/loading'

// 注册全局过滤器
import Vue2Filters from 'vue2-filters'
import * as commonFilters from './filters/common'

// 注册全局 UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import './assets/css/index.scss'

// 离线存储
import localforage from 'localforage'

// 判断是否开发环境
const debug = process.env.NODE_ENV !== 'production'

// 取消点击事件 300 毫秒延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = debug
// 开启debug模式
Vue.config.debug = debug
// 是否压制警告信息
Vue.config.silent = debug
// 是否关闭调试工具
Vue.config.devtools = debug

// 使用插件
Vue.use(Vuex)
Vue.use(Vue2Filters)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(localforage)
// 使用自定义插件
Vue.use(Loading)

// 集成过滤器
Object.keys(commonFilters).forEach(key => {
  Vue.filter(key, commonFilters[ key ])
})

// 离线存储配置
localforage.config(process.env.LOCALFORAGE_CONFIG)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
