var app = getApp()
 Page({
data: { 
 catlist: [
{ name:"奶盖"},{ name:"虎妞"},{ name:"虎扑"},{ name:"冒菜"},{ name:"宴仕"},{ name:"齐德龙"},{ name:"奶酪"},{ name:"奶啤"},{ name:"豹子"},{ name:"凤梨"},{ name:"乌云盖雪"},{ name:"黑尾"},{ name:"乌云盖冒"},{ name:"奶茶"},{ name:"独眼"},{ name:"小白"},{ name:"小黑"},{ name:"雪团子"},{ name:"煤球儿"},{ name:"白云彩"},{ name:"叮当"},{ name:"可可"},{ name:"大胖"},{ name:"二花"},{ name:"三多"},{ name:"四可"},
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    url: app.globalData.url,
  },

  onPullDownRefresh:function(){
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

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if(e.detail.value) {
    
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }


})

