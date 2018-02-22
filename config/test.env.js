var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_HOST: '"https://api.test.com"',
  LOCALFORAGE_CONFIG: {
      name: '"web"',
      version: 1.0,
      size: 4980736,
      storeName: '"web"',
      description: '"Local Store"'
  }
})
