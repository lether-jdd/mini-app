App({
  onLaunch: function () {
    console.log('App Launch')
    wx.login({
      success: (loginRes)=> {
        console.log(1111,{loginRes})
          if (loginRes.code) {
              // example: 081LXytJ1Xq1Y40sg3uJ1FWntJ1LXyth
              this.getSessionKey(loginRes.code,'wxf8ffa23d7b1ce057',"f157c61f3d6d8584b69992bc8d5f7c32")
          }
      }
    });
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  },
  getSessionKey (code, appid, appSecret) {
    var opt = {
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        params: {
            appid: appid,
            secret: appSecret,
            js_code: code,
            grant_type: 'authorization_code'
        }
    };
    wx.request({
      url: opt.url, //仅为示例，并非真实的接口地址
      data: opt.params,
      success (res) {
        console.log(res.data)
      }
    })
    // return http(opt).then(function (response) {
    //     var data = response.data;
    //     if (!data.openid || !data.session_key || data.errcode) {
    //         return {
    //             result: -2,
    //             errmsg: data.errmsg || '返回数据字段不完整'
    //         }
    //     } else {
    //         return data
    //     }
    // });
}
})
