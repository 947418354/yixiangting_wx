// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {
        img_src:"http://127.0.0.1:7001/img/home/banner1.jpg"
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/banner2.jpg"
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/banner3.jpg"
      },
    ],
    navlist:[
      {
        title:"团购",
        img_src:"http://127.0.0.1:7001/img/icons/grid-01.png"
      },
      {
        title: "外卖",
        img_src: "http://127.0.0.1:7001/img/icons/grid-01.png"
      },
      {
        title: "一键wifi",
        img_src: "http://127.0.0.1:7001/img/icons/grid-01.png"
      },
      {
        title: "活动",
        img_src: "http://127.0.0.1:7001/img/icons/grid-01.png"
      },
      {
        title: "买单",
        img_src: "http://127.0.0.1:7001/img/icons/grid-01.png"
      },
    ],
    hometuijian:[
      {
        img_src:"http://127.0.0.1:7001/img/home/tuijian1.jpg",
        title:"醋酸白瓷",
        price:10.00,
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/tuijian1.jpg",
        title: "醋酸白瓷",
        price: 10.00,
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/tuijian1.jpg",
        title: "醋酸白瓷",
        price: 10.00,
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/tuijian1.jpg",
        title: "醋酸白瓷",
        price: 10.00,
      },
      {
        img_src: "http://127.0.0.1:7001/img/home/tuijian1.jpg",
        title: "醋酸白瓷",
        price: 10.00,
      },
    ]
  },
  callphone(){
    //调用电话
    wx.makePhoneCall({
      phoneNumber: '15812341234',
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