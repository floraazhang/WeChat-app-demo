Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formReset: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否重置',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.showToast({
            title: '重置',
            image: '../images/exclamation.png',
            duration: 2000
          })
          this.setData({
            chosen: ''
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  formSubmit(e) {
    const value = e.detail.value;
    console.log(value);
    // if (true){
    if (value.var1 && value.var2 && value.var3 && value.var4 && value.var5 && value.var6 && value.var7 && value.var8 && value.var9 && value.var10 && value.var11 && value.var12 && value.var13 && value.var14 && value.var15 && value.var16 && value.var17 && value.var18) {
      console.log("提交表单",value);
      wx.showModal({
        title: '提示',
        content: '是否提交',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 2000
            })
            
            wx.request({
              url: 'https://247219280.mylightsite.com/mysqlcon.php',
              data: {
                var1: value.var1,
                var2: value.var2,
                var3: value.var3,
                var4: value.var4,
                var5: value.var5,
                var6: value.var6,
                var7: value.var7,
                var8: value.var8,
                var9: value.var9,
                var10: value.var10,
                var11: value.var11,
                var12: value.var12,
                var13: value.var13,
                var14: value.var14,
                var15: value.var15,
                var16: value.var16,
                var17: value.var17,
                var18: value.var18,
              },
              header: { "Content-Type": "application/x-www-form-urlencoded"},
              method: 'POST',
              dataType: 'json',
              responseType: 'text',
              success: function(res) {
                console.log("success")
                console.log(res.data)
              },
              fail: function(res) {},
              complete: function(res) {},
            })



          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      
    }
    else if (!value.var1){
      wx.showModal({
        title: '提示',
        content: '汇款人姓名',
        showCancel: false
      })
    }
    else if (!value.var2) {
      wx.showModal({
        title: '提示',
        content: '汇款人手机号',
        showCancel: false
      })
    }
    else if (!value.var3) {
      wx.showModal({
        title: '提示',
        content: '汇款人地址',
        showCancel: false
      })
    }
    else if (!value.var4) {
      wx.showModal({
        title: '提示',
        content: '汇款人银行',
        showCancel: false
      })
    }
    else if (!value.var5) {
      wx.showModal({
        title: '提示',
        content: '汇款人账户',
        showCancel: false
      })
    }
    else if (!value.var6) {
      wx.showModal({
        title: '提示',
        content: '汇款币种',
        showCancel: false
      })
    }
    else if (!value.var7) {
      wx.showModal({
        title: '提示',
        content: '汇款金额',
        showCancel: false
      })
    }
    else if (!value.var8) {
      wx.showModal({
        title: '提示',
        content: '收款人姓名',
        showCancel: false
      })
    }
    else if (!value.var9) {
      wx.showModal({
        title: '提示',
        content: '收款人账户',
        showCancel: false
      })
    }
    else if (!value.var10) {
      wx.showModal({
        title: '提示',
        content: '收款人电话',
        showCancel: false
      })
    }
    else if (!value.var11) {
      wx.showModal({
        title: '提示',
        content: '国家/地区',
        showCancel: false
      })
    }
    else if (!value.var12) {
      wx.showModal({
        title: '提示',
        content: '地址',
        showCancel: false
      })
    }
    else if (!value.var13) {
      wx.showModal({
        title: '提示',
        content: '收款地区/国家',
        showCancel: false
      })
    }
    else if (!value.var14) {
      wx.showModal({
        title: '提示',
        content: '银行所在城市',
        showCancel: false
      })
    }
    else if (!value.var15) {
      wx.showModal({
        title: '提示',
        content: '银行名称地址',
        showCancel: false
      })
    }
    else if (!value.var16) {
      wx.showModal({
        title: '提示',
        content: 'SWIFT代码',
        showCancel: false
      })
    }
    else if (!value.var17) {
      wx.showModal({
        title: '提示',
        content: '交易附言',
        showCancel: false
      })
    }
    else if (!value.var18) {
      wx.showModal({
        title: '提示',
        content: '汇款用途',
        showCancel: false
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
