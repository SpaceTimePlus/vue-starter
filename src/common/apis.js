/**
 * Created by athena on 2017/9/15.
 */

// HOST -----------------------------------------------------------------------------

export const wxApiHost = process.env.WX_API_HOST
export const appApiHost = process.env.APP_API_HOST
export const journalApiHost = process.env.JOURNAL_API_HOST
export const vrApiHost = process.env.VR_API_HOST
export const vrNewApiHost = process.env.VR_NEW_API_HOST
export const leaApiHost = process.env.LEA_API_HOST
// 接口组装 -----------------------------------------------------------------------------

/***
 * 日志接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function journalApi (apistr) {
  return journalApiHost + apistr
}

/***
 * 微信接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function wxApi (apistr) {
  return wxApiHost + apistr
}

/***
 * APP接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function appApi (apistr) {
  return appApiHost + apistr
}

/***
 * 实景接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function vrApi (apistr) {
  return vrApiHost + apistr
}

/***
 * 新实景接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function vrNewApi (apistr) {
  return vrNewApiHost + apistr
}

/***
 * 组织接口
 * @param apistr 接口地址
 * @returns {*}
 */
export function leaApi (apistr) {
  return leaApiHost + apistr
}

// API 列表 -----------------------------------------------------------------------------

// 日志 -----------------------------------------------------------------------------

/**
 * 用户操作日志记录
 * @type {string}
 */
export const JOURNAL_FOR_USER = '/journal/user'

// 用户 -----------------------------------------------------------------------------

/**
 * 根据微信网页授权，获取用户信息
 * @type {string}
 */
export const WX_AUTHOR_LOGIN = '/wxapi/oauth?code={code}'

/**
 * 根据union_id+openid获取用户信息
 * @type {string}
 */
export const WX_GET_USERINFO_BY_OPENID = '/custom/weixin/customThirdParty/login?unionId={unionId}&openId={openId}&typeId=3'

/**
 * 获取banner数据
 * @type {string}
 */
export const APP_HOME_BANNER = '/HelpAnswer/index/hot/carousel?cityId={cityId}'

/**
 * 获取房源首页猜你喜欢数据
 * @type {string}
 */
export const APP_HOME_HOUSELIKE = '/housing/garden/latest/online?cityId={cityId}&PageSize={pageSize}&PageIndex={pageIndex}'

/**
 * 获取房源首页最新开盘数据
 * @type {string}
 */
export const APP_HOME_HOUSELASTONLINE = '/garden/v2/hotsale?cityid={cityId}&PageSize={pageSize}&PageIndex={pageIndex}'

/**
 * 获取楼盘动态
 * @type {string}
 */
export const APP_HOME_PANANOINFO = '/housing/New/GardenDynamicScene/{pageIndex}/{pageSize}/{cityId}'

/**
 * 获取房源首页城市列表
 * @type {string}
 */
export const APP_GET_CITY = '/city/groupingSort'

/**
 * 获取热搜列表
 * @type {string}
 */
export const APP_GET_HOT_SEARCH = '/HelpAnswer/HotSearchKeyWord?cityId={cityId}'

/**
 * 获取帮帮专家列表
 * @type {string}
 */
export const APP_GET_EXPERT = '/HelpAnswer/bang/index?cityId={cityId}&PageSize={PageSize}&PageIndex=0'

/**
 * 获取问答页热门语音
 * @type {string}
 */
export const APP_GET_TOPIC = '/qa/index/hot/voice/topic?cityId={cityId}&PageSize={PageSize}&PageIndex=0'

/**
 * 获取热门语音话题列表
 * @type {string}
 */
export const APP_GET_TOPIC_LIST = '/qa/list/hot/voice/topic?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取问答页最新提问列表
 * @type {string}
 */
export const APP_GET_NEW_PROBLEM = '/qa/index/list/Newest?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取问答页最新提问列表
 * @type {string}
 */
export const APP_GET_ANSWERED_PROBLEM = '/qa/index/list/Answer?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取我的实景列表
 * @type {string}
 */
export const APP_GET_MY_PANANO = '/v2/author/{id}/vtours?index={PageIndex}&size={PageSize}&type=0&onSale=0&orientation=&roomType=0&key='

/**
 * 获取我的回答 待回答数据
 * @type {string}
 */
export const APP_GET_MY_ANSWER_WAIT = '/HelpAnswer/v2/answerer/all/list?cityId={cityId}&answerState=1&questionTypeId={questionTypeId}&PageSize={PageSize}&PageIndex={PageIndex}&userId={userId}'

/**
 * 获取我的回答 已回答数据
 * @type {string}
 */
export const APP_GET_MY_ANSWER_COMPLETED = '/HelpAnswer/v2/answerer/all/list?cityId={cityId}&answerState=2&PageSize={PageSize}&PageIndex={PageIndex}&userId={userId}'

/**
 * 获取我的提问数据
 * @type {string}
 */
export const APP_GET_MY_QUESTION = '/HelpAnswer/v7/questioner/all/list?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}&typeId={typeId}&userId={userId}'

/**
 * 获取楼盘详情
 * @type {string}
 */
export const APP_GET_GARDEN_DETAIL = '/garden/v2/gardenInfoById?gardenid={gardenid}'

/**
 * 获取楼盘问答-可提问人列表
 * @type {string}
 */
export const APP_GET_GARDEN_ANSWER = '/garden/list/answer?gardenId={gardenId}'

/**
 * 获取楼盘问答-相关问答数据
 * @type {string}
 */
export const APP_GET_GARDEN_INTERLOCUTION = '/garden/v3/list/interlocution?gardenId={gardenId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取楼盘问答-相关问答数据
 * @type {string}
 */
export const APP_GET_GARDEN_DYNAMIC = '/dynamic/scene/all/0/20/{gardenId}'

/**
 * 获取问题详情数据
 * @type {string}
 */
export const APP_GET_PROBLEM_DETAIL_0 = '/HelpAnswer/question/details?haId={haId}&userId={userId}'
export const APP_GET_PROBLEM_DETAIL_2 = '/HelpAnswer/helping/info?haId={haId}&userId={userId}'
export const APP_GET_PROBLEM_DETAIL_5 = '/HelpAnswer/quick/info?haId={haId}&userId={userId}'
export const APP_GET_PROBLEM_DETAIL_6 = '/HelpAnswer/consult/info?haId={haId}&userId={userId}'

/**
 * 获取普通问题评价数据
 * @type {string}
 */
export const APP_GET_PROBLEM_COMMENT = '/HelpAnswer/answer/getComment?hadId={hadId}&haId={haId}'

/**
 * 获取回答者信息
 * @type {string}
 */
export const APP_GET_PROBLEM_CUSTOM_INFO = '/custom/info?uId={uId}'

/**
 * 获取类似问题
 * @type {string}
 */
export const APP_GET_PROBLEM_SIMILAR = '/HelpAnswer/byMarkId/Similar?haId={haId}&cityId={cityId}'

/**
 * 获取问题答案列表数据
 * @type {string}
 */
export const APP_GET_PROBLEM_ANSWER_LIST_2 = '/HelpAnswer/helping/answer/list?haId={haId}&PageSize={PageSize}&PageIndex={PageIndex}&userId={userId}'
export const APP_GET_PROBLEM_ANSWER_LIST_5 = '/HelpAnswer/quick/info/answer/list?haId={haId}&PageSize={PageSize}&PageIndex={PageIndex}&userId={userId}'
export const APP_GET_PROBLEM_ANSWER_LIST_6 = '/HelpAnswer/consult/info/answer/list?haId={haId}&PageSize={PageSize}&PageIndex={PageIndex}&userId={userId}'

/**
 * 获取问题答案详情
 * @type {string}
 */
export const APP_GET_PROBLEM_ANSWER_2 = '/HelpAnswer/helping/answer/details?hadId={hadId}&userId={userId}'
export const APP_GET_PROBLEM_ANSWER_5 = '/HelpAnswer/quick/answer/details?hadId={hadId}&userId={userId}'
export const APP_GET_PROBLEM_ANSWER_6 = '/HelpAnswer/consult/answer/details?hadId={hadId}&userId={userId}'

/**
 * 获取用户基本信息
 * @type {string}
 */
export const APP_GET_USER_INFO = '/custom/info?uId={id}'

/**
 * 获取用户收到的评价
 * @type {string}
 */
export const APP_GET_USER_COMMENT = '/HelpAnswer/answer/getForMyComment?answererId={id}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取用户收到的评价统计
 * @type {string}
 */
export const APP_GET_USER_COMMENT_COUNT = '/HelpAnswer/answer/GetCountMyScore?answererId={id}'

/**
 * 获取用户的问答
 * @type {string}
 */
export const APP_GET_USER_ANSWER_LIST = '/HelpAnswer/v7/answerer/finish/list?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}&userId={id}'

/**
 * 获取用户的实景列表
 * @type {string}
 */
export const APP_GET_USER_PANANO_LIST = '/V2/bangbang/{cityId}/{id}/{PageIndex}/{PageSize}/my_stages'

/**
 * 获取用户房源列表
 * @type {string}
 */
export const APP_GET_USER_HOUSE_LIST = '/app/use/v1/author/{id}/vtours?/index={PageIndex}&size={PageSize}&type={type}&minArea={minArea}&maxArea={maxArea}&minRoom={minRoom}&maxRoom={maxRoom}&minPrice={minPrice}&maxPrice={maxPrice}&decorateMark={decorateMark}&key=&sort={sort}'
/**
 * 获取用户在售新房列表
 * @type {string}
 */
export const APP_GET_USER_NEW_HOUSE_LIST = '/auth/broker/newHouse/{cityId}/{id}/{PageIndex}/{PageSize}/my_stages'

/**
 * 获取用户在售二手房列表
 * @type {string}
 */
export const APP_GET_USER_OLD_HOUSE_LIST = '/auth/broker/oldHouse/{cityId}/{id}/{PageIndex}/{PageSize}/my_stages'

/**
 * 获取用户的设计作品列表
 * @type {string}
 */
export const APP_GET_USER_WORK_LIST = '/auth/broker/Decorate/{cityId}/{id}/{PageIndex}/{PageSize}/my_stages'

/**
 * 获取搜索结果页楼盘列表
 * @type {string}
 */
export const APP_GET_SEARCH_RESULT_GARDEN = '/garden/bykey?key={key}&cityid={cityId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取搜索结果页实景列表
 * @type {string}
 */
export const APP_GET_SEARCH_RESULT_PANANO = '/vtour/search/byKey/{key}/{cityId}/{PageIndex}/{PageSize}'

/**
 * 获取搜索结果页帮帮专家列表
 * @type {string}
 */
export const APP_GET_SEARCH_RESULT_BANG = '/HelpAnswer/bang/byKey?key={key}&cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}&typeId=1'

/**
 * 获取搜索结果页问答列表
 * @type {string}
 */
export const APP_GET_SEARCH_RESULT_QA = '/HelpAnswer/v5/byKey?key={key}&cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}&typeId=1'

/**
 * 获取新房实景楼盘列表
 * @type {string}
 */
export const APP_GET_PANANO_HOUSE_LIST = '/garden/v2/hotsale?cityid={cityId}&districtid={districtid}&typeid={typeid}&rangeid={rangeid}&markid={markid}&PageSize={PageSize}&PageIndex={PageIndex}&sortType={sortType}'

/**
 * 获取新房实景楼盘列表筛选条件
 * @type {string}
 */
export const APP_GET_HOT_FILTER = '/garden/getHotFilter?cityId={cityId}'

/**
 * 获取二手房楼盘列表
 * @type {string}
 */
export const APP_GET_PANANO_SEC_HOUSE_LIST = '/housing/vtour/old/house/list/{cityId}/{minRoom}/{maxRoom}/{minPrice}/{maxPrice}/{minArea}/{maxArea}/{markId}/{PageIndex}/{PageSize}'

/**
 * 获取二手房楼盘列表筛选条件
 * @type {string}
 */
export const APP_GET_HOT_FILTER_OLD = '/housing/vtour/old/house/filter/{cityId}'

/**
 * 获取家居装修列表
 * @type {string}
 */
export const APP_GET_PANANO_DECORATE = '/housing/vtour/decorate/list/{cityId}/{minRoom}/{maxRoom}/{methodType}/{markId}/{PageIndex}/{PageSize}'

/**
 * 获取家居装修筛选条件
 * @type {string}
 */
export const APP_GET_PANANO_DECORATE_CONDITIONS = '/custom/auth/designer/Dictionaries'

/**
 * 问答首页-提交快问快答问题
 * @type {string}
 */
export const APP_GET_QUICK_ASK = '/HelpAnswer/quick/ask'

/**
 * 向某人提问
 * @type {string}
 */
export const APP_GET_QUSTION_ASK = '/HelpAnswer/questioner/ask'

/**
 * 获取我的关注列表
 * @type {string}
 */
export const APP_GET_MY_CONCERN = '/custom/v2/fav/garden/list?userId={userId}&cityId={cityId}&PageIndex={PageIndex}&PageSize={PageSize}'

/**
 * 获取我的旁听列表
 * @type {string}
 */
export const APP_GET_MY_LISTEN = '/HelpAnswer/custom/bugList?cityId={cityId}&PageSize={PageSize}&PageIndex={PageIndex}&customId={customId}'

/**
 * 获取我的评价列表
 * @type {string}
 */
export const APP_GET_MY_COMMENT = '/HelpAnswer/answer/getMyComment?criticId={userId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取我收到的评价列表
 * @type {string}
 */
export const APP_GET_FOR_MY_COMMENT = '/HelpAnswer/answer/getForMyComment?answererId={userId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取我的多人咨询房间
 * @type {string}
 */
export const APP_GET_MY_MULTI_ROOM = '/HelpAnswer/room/list?uId={userId}&PageSize={PageSize}&PageIndex={PageIndex}'

/**
 * 获取我的二维码
 * @type {string}
 */
export const APP_GET_MY_QR_CODE = '/wxapi/getQrcode?userId={userId}'

/**
 * 获取验证码
 * @type {string}
 */
export const APP_GET_CODE = '/custom/customThirdParty/sendSMSValidCode?mobile={mobile}'

/**
 * 绑定手机
 * @type {string}
 */
export const APP_GET_BINDING_0 = '/custom/customThirdParty/binding'
export const APP_GET_BINDING = '/custom/wx/balance/customThirdParty/binding'

/**
 * 获取热门城市
 * @type {string}
 */
export const APP_GET_HOTCITY = '/city/hotCity?num=20'

/**
 * 获取微信js接口权限
 * @type {string}
 */
export const APP_GET_WX_VAL = '/wxapi/validate'

/**
 * 文字回答问题
 * @type {string}
 */
export const APP_POST_ANSWER_TXT = '/HelpAnswer/txt/answer'

/**
 * 组织列表
 * @type {string}
 */
export const APP_GET_LEAGUES_LIST = '/v1/parter/{userId}/joined/leagues'

/**
 * 组织成员列表
 * @type {string}
 */
export const APP_GET_LEAGUE_PARTERS = '/v1/league/{id}/parters'

/**
 * 读取邀约列表
 * @type {string}
 */
export const APP_GET_MEMBER_INVITES = '/v1/member/{userId}/invites'

/**
 * 接受邀约
 * @type {string}
 */
export const APP_GET_INVITES_ACCEPT = '/v1/parter/{userId}/invite/{id}/accept/parter'

/**
 * 拒绝邀约
 * @type {string}
 */
export const APP_GET_INVITES_REJECT = '/v1/parter/{userId}/invite/{id}/reject/parter'

/**
 * 退出组织
 * @type {string}
 */
export const APP_LEAGUE_PARTER_EXIT = '/v1/league/{id}/parter/{parterId}'

/**
 * 组织共享实景清单
 * @type {string}
 */
export const APP_GET_LEAGUES_SHARED = '/app/use/v1/vtours/shared/league/{id}?page_index={PageIndex}&page_size={PageSize}&type={type}&minRoom={minRoom}&maxRoom={maxRoom}&minPrice={minPrice}&maxPrice={maxPrice}&minArea={minArea}&maxArea={maxArea}&houseTypeMark={houseTypeMark}&orientationMark={orientationMark}&decorateMark={decorateMark}&key={key}'

/**
 * 获取组织任务列表
 * @type {string}
 */
export const APP_GET_LEAGUE_TASK = '/v1/spread/list/by/league/{id}?uid={userId}&cityId={cityId}&type={type}&index={PageIndex}&size={PageSize}'
