// 前端自动化发布
module.exports = {
  modules: [{
    name: '正式环境',
    env: 'prod',
    ssh: {
      host: 'ip',
      port: 22,
      username: '',
      password: ''
    },
    buildCommand: 'build', // 构建命令
    localPath: 'dist', // 本地路径
    remotePath: '/opt/portal/static' // 服务器路径
  }],
  // global参数
  tag: 'v1.0' // 版本号
}
