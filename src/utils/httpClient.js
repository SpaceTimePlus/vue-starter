/**
 * Created by athena on 2017/9/14.
 */
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

/**
 * 返回json数据
 * @param response
 * @returns {*}
 */
export function parseJSON (response) {
  return response.json()
}

/***
 * 验证值是否有效
 * @param val
 * @returns {boolean}
 */
export function isValid (val) {
  if (val !== '' && undefined !== val && val !== 'undefined' && val !== null && val !== 'null' && {} !== val) {
    return true
  } else {
    return false
  }
}

/**
 * 返回text数据
 * @param response
 * @returns {*}
 */
export function parseText (response) {
  // 检查状态
  if (response.status >= 200 && response.status < 400) {
    return response.text()
  } else {
    if (debug) {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
    return null
  }
}

/***
 * GET 请求
 * @param url
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function get (url, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  return axios({
    method: 'get',
    url: url,
    responseType: responseType,
    headers: headers
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}
/***
 * wxGET 请求
 * @param url
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function wxGet (url, responseType, headers, data) {
  if (!responseType) {
    responseType = 'json'
  }
  return axios({
    method: 'get',
    url: url,
    responseType: responseType,
    headers: headers,
    data: {url: data}
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * GET 请求
 * @param url
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function vrGet (url, Accept, contentType) {
  if (!isValid(Accept)) {
    Accept = '*/*'
  }
  if (!isValid(contentType)) {
    contentType = 'application/json'
  }
  return axios({
    method: 'get',
    mode: 'cors', // 允许跨域
    url: url,
    headers: {Accept: contentType}
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * POST 请求
 * @param url
 * @param data
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function post (url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  return axios({
    method: 'post',
    url: url,
    data: data,
    responseType: responseType,
    headers: headers
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * PUT 请求
 * @param url
 * @param data
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function put (url, Accept, contentType) {
  if (!isValid(Accept)) {
    Accept = '*/*'
  }
  if (!isValid(contentType)) {
    contentType = 'application/json'
  }
  return axios({
    method: 'put',
    mode: 'cors', // 允许跨域
    url: url,
    headers: {Accept: contentType}
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * DELETE 请求
 * @param url
 * @param data
 * @param responseType : 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param headers
 */
export function del (url, Accept, contentType) {
  if (!isValid(Accept)) {
    Accept = '*/*'
  }
  if (!isValid(contentType)) {
    contentType = 'application/json'
  }
  return axios({
    method: 'delete',
    mode: 'cors', // 允许跨域
    url: url,
    headers: {Accept: contentType}
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}
