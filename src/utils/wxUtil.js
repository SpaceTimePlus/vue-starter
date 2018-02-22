/**
 * Created by athena on 2017/9/14.
 */
import wx from 'tencent-wx-jssdk'

/***
 * 判断是否是微信浏览器
 * @returns {boolean}
 */
export const isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

/***
 * 通过config接口注入权限验证配置
 * @param appId
 * @param timestamp
 * @param nonceStr
 * @param signature
 */
export const config = (appId, timestamp, nonceStr, signature) => {
  wx.config({
    debug: false,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: ['checkJsApi', 'onMenuShareTimeline',
      'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems',
      'translateVoice', 'startRecord', 'stopRecord',
      'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice',
      'uploadVoice', 'downloadVoice', 'chooseImage',
      'previewImage', 'uploadImage', 'downloadImage',
      'getNetworkType', 'openLocation', 'getLocation',
      'hideOptionMenu', 'showOptionMenu', 'closeWindow']
  })
}

/***
 * 微信网页授权
 * @returns {boolean}
 */
export const oauth2 = (appId, redirectUri) => {
  // 地址转义
  redirectUri = redirectUri.replace(/:/g, '%3A').replace(/\//g, '%2F')
  redirectUri = redirectUri.split('#')[0]
  // 组装链接地址，参数前后的位置会影响最终访问结果
  let wxoauthurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + redirectUri + '&response_type=code&scope=snsapi_userinfo&state=STATE'
  // 跳转到微信网页授权
  window.location.href = wxoauthurl
}

export const wxShare = (shareType, shareTitle, shareDesc, shareUrl, shareDataUrl, thumbURL, success, fail) => {
  let shareData = {
    type: shareType,
    title: shareTitle,
    desc: shareDesc,
    link: shareUrl,
    imgUrl: thumbURL,
    dataUrl: shareDataUrl
  }
  wx.onMenuShareAppMessage({
    title: shareData.title, // 分享标题
    desc: shareData.desc, // 分享描述
    link: shareData.link, // 分享链接
    imgUrl: shareData.imgUrl, // 分享图标
    type: shareData.type, // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
      success()
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
      fail()
    }
  })
  wx.onMenuShareTimeline({
    title: shareData.title, // 分享标题
    link: shareData.link, // 分享链接
    imgUrl: shareData.imgUrl, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      success()
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
      fail()
    }
  })
}
