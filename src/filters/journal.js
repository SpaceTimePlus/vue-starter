/**
 * Created by athena on 2017/9/14.
 */
import {journal} from '../services/commonService'

export function putJournal () {
  // 添加用户操作日志
  let data = {}
  journal(data)
}
