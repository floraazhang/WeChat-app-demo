//index.js
//获取应用实例
const app = getApp()

// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
});

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};



Page({
  data: {
    // photo: '',
    // name: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindGetUserInfo: function(e) {
    console.log(e);
    console.log("正在登录");
    showBusy("正在登录");

    var that = this;
    var userInfo = e.detail.userInfo;

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {

          // 检查登录是否过期
          wx.checkSession({
            success: function () {
              // 登录态未过期
              showSuccess('登录成功');
              console.log("已经授权");
              console.log('登录成功', userInfo);

              wx.getUserInfo({
                success: res => {
                  console.log("test")
                  app.globalData.userInfo = res.userInfo
                  console.log(app.globalData.userInfo)
                  that.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                  })
                }
              })

            },

            fail: function () {
              // 登录态已过期，需重新登录
              var options = {
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                userInfo: userInfo
              }
              that.getWxLogin(options);
            },
          });
        } else {
          showModel('用户未授权', e.detail.errMsg);
        }
      }
    });
  },

  getWxLogin: function (options) {
    var that = this;

    wx.login({
      success: function (loginResult) {
        var loginParams = {
          code: loginResult.code,
          encryptedData: options.encryptedData,
          iv: options.iv,
        }
        qcloud.requestLogin({
          loginParams, success() {
            showSuccess('登录成功');
            console.log("第一次");
            wx.getUserInfo({
              success: res => {
                console.log("test")
                app.globalData.userInfo = res.userInfo
                console.log(app.globalData.userInfo)
                that.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                })
              }
            })
            console.log('登录成功', options.userInfo);
          },
          fail(error) {
            showModel('登录失败', error)
            console.log('登录失败', error)
          }
        });
      },
      fail: function (loginError) {
        showModel('登录失败', loginError)
        console.log('登录失败', loginError)
      },
    });
  }
  
})
