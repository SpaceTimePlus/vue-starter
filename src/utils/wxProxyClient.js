/**
 * Created by athena on 2017/9/15.
 */
import * as http from './httpClient'
import {wxApiHost} from '../common/apis'

/***
 * GET 请求
 * @param url 接口地址
 * @param type 请求类型 （'http'  'https'）
 */
export function get (url, type, headers) {
  let urlType = 'get'
  if (type === 'https') {
    urlType = 'ssl_get'
  }
  return http.post(wxApiHost + '/client/' + urlType, {url: url}, '', headers)
}

/***
 * vrGet 请求
 * @param url 接口地址
 * @param type 请求类型 （'http'  'https'）
 */
export function vrGet (url, accept, contentType) {
  return http.vrGet(url, accept, contentType)
}

/***
 * POST 请求
 * @param url 接口地址
 * @param type 请求类型 （'http'  'https'）
 */
export function post (url, data, type) {
  let urlType = 'post'
  if (type === 'https') {
    urlType = 'ssl_post'
  }
  return http.post(wxApiHost + '/client/' + urlType, {url: url, obj: data})
}

/***
 * PUT 请求
 * @param url 接口地址
 * @param type 请求类型 （'http'  'https'）
 */
export function put (url, data, type) {
  let urlType = 'put'
  if (type === 'https') {
    urlType = 'ssl_put'
  }
  return http.post(wxApiHost + '/client/' + urlType, {url: url, obj: data})
}
