/**
 * Created by dh on 2017/1/17.
 */
/***
 * 验证值是否有效
 * @param val
 * @returns {boolean}
 */
// 判断空
export function isNull (obj) {
  if (obj === '' || obj === undefined || obj === 'undefined' || obj == null || obj === 'null') {
    return true
  }
  return false
}

// 获取地址参数
export function getUrlVars () {
  let vars = []
  let hash
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=')
    vars.push(hash[0])
    vars[hash[0]] = hash[1]
  }
  return vars
}
