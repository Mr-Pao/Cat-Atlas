var app = getApp()
Page({
data: {
  search:"",//搜索值
  value: '',
  fostered_catlist: [],
  unknown_catlist: [],
  dead_catlist: [],
  screenWidth: 0,
  screenHeight: 0,
  imgwidth: 0,
  imgheight: 0,
  navbar: ['在校', '毕业', '休学', '喵星'],
  currentTab: 0,
  url: app.globalData.url,
},

  /*监听搜索输入框的值*/
  onChange(event){
    console.log(event.detail)
    this.setData({search:event.detail})
  },
  /*输入框搜索信息*/
  onSearch(){
    var that = this;
    console.log(that.data.search);
    if (that.data.search) {
      wx.navigateTo({
        url: '/pages/cats/' + that.data.search + '/' + that.data.search,
      })
    }
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      wx.navigateTo({
        url: '/pages/cats/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },
    
  //单击复制文本
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'Pao_Leo',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

})

