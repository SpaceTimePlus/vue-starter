/**
 * Created by athena on 2017/9/14.
 */
import * as http from '../utils/httpClient'
import * as apis from '../common/apis'
// import * as wxProxyClient from '../utils/wxProxyClient'
// const accept = 'Accept'
// const contentType = 'application/json'

// 记录用户操作日志
export function journal (journal) {
  let url = apis.journalApi(apis.JOURNAL_FOR_USER)
  return http.post(url, journal)
}

// 根据微信网页授权，获取用户信息
export function wxOauth (code) {
  let url = apis.wxApi(apis.WX_AUTHOR_LOGIN).replace('{code}', code)
  return http.get(url)
}

// 获取微信js接口权限
export function getWxVal (data) {
  let url = apis.wxApi(apis.APP_GET_WX_VAL)
  return http.wxGet(url, data)
}
