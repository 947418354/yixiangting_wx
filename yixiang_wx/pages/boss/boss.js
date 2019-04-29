// pages/boss/boss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonvalue: "↓",
    isbutton:0,
    jianjie:"简介简介简介简介简介简介简介简介简介简介简介aaaa",
    tabi:0,
  },
  tabnav(e){
    this.setData({
      tabi: e.target.dataset.tabi
    })
  },
  arrowjianjie(){
    if(this.data.isbutton==0){
      this.data.isbutton=1;
      var buttonvalue ="↑";
      var jianjie ="简介简介简介简介简介简介简介简介简介简介简介aaaa完整简介完整简介完整简介完整简介完整简介完整简介完整简介完整简介完整简介完整简介"
    }else{
      this.data.isbutton = 0;
      var buttonvalue = "↓";
      var jianjie = "简介简介简介简介简介简介简介简介简介简介简介aaaa"
    }
    this.setData({
      jianjie:jianjie,
      buttonvalue:buttonvalue,
    })
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