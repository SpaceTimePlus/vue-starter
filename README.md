# Wechat vue

> A Vue.js project for wechat

## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + axios + mint-ui + sass + flex + svg

## 指令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 主要依赖

 * [vue](https://github.com/vuejs/vue)  主框架
 * [vuex](https://github.com/vuejs/vuex)  状态管理
 * [vue-router](https://github.com/vuejs/vue-router)  路由控制
 * [axios](https://github.com/mzabriskie/axios)   数据交互
 * [localforage](https://github.com/localForage/localForage)  本地存储
 * [mint-ui](https://github.com/ElemeFE/mint-ui)  UI
 * [vux](https://github.com/airyland/vux)   UI及微信相关
 


# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目配置文件
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── assets                                  // 静态资源
│   ├── common                                  // 公共参数
│   ├── components                              // 构成页面的小组件
│   ├── filters                                 // 过滤器
│   ├── router                                  // 路由配置
│   ├── services                                // 数据交互
│   ├── store                                   // vuex的状态管理
│   │   ├── actiosn.js                          // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   └── mutations.js                        // 配置mutations
│   ├── utils                                   // 工具集
│   └── views                                   // 页面组件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
│   ├── static                                  // 静态资源
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

```
