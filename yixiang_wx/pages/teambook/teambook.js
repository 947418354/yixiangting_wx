// pages/teambook/teambook.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'',
    list:[],
    tabi:0
  },
  tabnav(e) {
    this.setData({
      tabi: e.target.dataset.tabi
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url=app.globalData.baseUrl;

    this.setData({
      baseUrl:url
    })
    var that=this;
    wx.request({
      url: that.data.baseUrl+'getteambook',
      data: {},
      method: "GET",
      success: (res) => {
        console.log(res.data);
        this.setData({
          list:res.data
        })
      },
      fail: () => {
        console.log("请求失败")
      },
      complete: () => {
        console.log("请求完成")
      }
    })
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