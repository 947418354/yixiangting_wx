// pages/allbook/allbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tabnav(e) {
    var tabi = e.target.dataset.tabi;
    switch (tabi) {
      case '0':
        wx.navigateTo({
          url: '/pages/teambook/teambook',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        });
        break;
      case '0':
        wx.navigateTo({
          url: '/pages/underlinebook/underlinebook',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        });
        break;
      case '0':
        wx.navigateTo({
          url: '/pages/waibook/waibook',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        });
        break;
      case '3':
        wx.navigateTo({
          url: '/pages/dianbook/dianbook',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        });
        break;  
      default:
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})