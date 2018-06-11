import axios from './fetch'
import localforage from 'localforage'

const debug = process.env.NODE_ENV !== 'production'

/***
 * GET 请求
 * @param url
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function get (url, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'get',
    url,
    responseType,
    headers
  })
}

/***
 * POST 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function post (url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'post',
    url,
    data,
    responseType,
    headers
  })
}

/***
 * PUT 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function put (url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'put',
    url,
    data,
    responseType,
    headers
  })
}

/***
 * DELETE 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function del (url, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'delete',
    url,
    responseType,
    headers
  })
}


// 缓存操作 =============================================================================================================

/***
 * 设置本地缓存过期时间
 * @param key
 * @param min
 */
function setExpiration(key, min) {
  let expirationSet = new Date().getTime() + 1000 * 60 * min
  localforage.setItem(key + '_expiration', expirationSet)
}

/***
 * 判断本地缓存是否有效
 * @param key
 */
async function keyEnable(key) {
  let expirationGet = await localforage.getItem((key + '_expiration')
  let enable = expirationGet > new Date().getTime()
  return enable
}


/***
 * 获取远程数据（缓存版）
 * @param key
 * @returns {Promise<*>}
 */
async function getReturn(url, responseType, headers,  key, min) {

  let location = await localforage.getItem(key)

  if (location && keyEnable(key)) {

    return location

  } else {

    let result = await get(url, responseType, headers)

    if (result) {

      localforage.setItem(key, result)

      setExpiration(key, min)

      return result

    }

  }
}
