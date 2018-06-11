/**
 * Created by athena on 2017/9/14.
 */
import * as mutationType from '../common/mutationType'
import * as commonService from '../services/commonService'
import {isNull, returnResponse} from '../utils/ValUtils'
// import localforage from 'localforage'

// 更新状态
export const updateState = async ({ commit }, payload) => {
  // commit 到 mutation，
  commit(mutationType.UPDATE_STATE, {obj: payload.obj, prop: payload.prop, value: payload.value})
}

// 微信 =====================================================================================================================
// 获取微信js接口权限
export const wxValidate = async ({ commit }, payload) => {
  // 异步获取远程数据
  let vdata = window.location.href
  let result = await commonService.getWxVal(vdata)
  let code = result.head.code
  let data = result.body.data
  if (code > 0 && !isNull(data)) {
    let backStr = data
    let arr = backStr.split(',')
    return arr
  }
}

// 根据微信网页授权，获取用户信息
export const wxOauth = async ({ commit }, payload) => {
  let code = payload.code
  // 异步获取远程数据
  let userId = await commonService.wxOauth(code)
  // commit 到 mutation，
  commit(mutationType.WX_OAUTH, {userId: userId})
}
