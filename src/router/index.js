import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes,
  // return 期望滚动到哪个的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// const debug = process.env.NODE_ENV !== 'production'

// 全局进入页面导航钩子
router.beforeEach(async (to, from, next) => {
  next()
})
router.afterEach(route => {
  // ...
})

export default router
