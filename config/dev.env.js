var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://api.test.com"',
  LOCALFORAGE_CONFIG: {
    name: '"web"',
    version: 1.0,
    size: 4980736,
    storeName: '"web"',
    description: '"Local Store"'
  }
})
