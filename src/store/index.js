/**
 * Created by athena on 2017/9/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// 业务对象
import * as state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
// 辅助数据
import message from '@/common/message'
// 模块数据
import user from './modules/user'

Vue.use(Vuex)

// 不要在生产环境使用严格模式, 这会严重影响应用的整体性能
const debug = process.env.NODE_ENV !== 'production'

// 应用程序的统一状态数据存储
const store = new Vuex.Store({
  message,
  state,
  actions,
  getters,
  mutations,
  strict: debug, // true 意味着必须通过 mutation 来修改 state
  plugins: debug ? [ createLogger() ] : [], // 是否使用日志输出

  modules: {
    user
  }
})

export default store
