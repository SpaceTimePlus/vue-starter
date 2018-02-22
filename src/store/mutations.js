/**
 * Created by athena on 2017/9/14.
 */
import * as types from '../common/mutationType'
import { set } from 'vue'

export default {
  // 更新 state
  [types.UPDATE_STATE] (state = {}, {obj, prop, value}) {
    set(obj, prop, value)
  },
  // 更新用户信息
  [types.WX_OAUTH] (state = {}, {userId}) {
    set(state, 'userId', userId)
  }
}
