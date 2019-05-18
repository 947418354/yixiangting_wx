// pages/order/order.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPay:false,
    defaultAdd:-1,
    defaultAddC:{},
    goods: {
      1: {
        id: 1,
        name: '娃娃菜',
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        sold: 1014,
        price: 2
      },
      2: {
        id: 2,
        name: '金针菇',
        sold: 1029,
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        price: 3
      },
      3: {
        id: 3,
        name: '方便面',
        sold: 1030,
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        price: 2
      },
      4: {
        id: 4,
        name: '粉丝',
        sold: 1059,
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        price: 1
      },
      5: {
        id: 5,
        name: '生菜',
        sold: 1029,
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        price: 2
      },
      6: {
        id: 6,
        name: '白菜',
        sold: 1064,
        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
        price: 2
      },
      7: {
        id: 7,
        name: '杏鲍菇',
        sold: 814,

        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
      },
      8: {
        id: 8,
        name: '香菇',
        sold: 124,

        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
      },
      9: {
        id: 9,
        name: '猴头菇',
        sold: 102,

        pic: 'http://127.0.0.1:7001/img/food-list/1.jpg',
      }
    },
    current: 'tab1',
    tab1:true,
  },
  pay(){
    console.log("pay")
  },
  handleChange({ detail }) {
    // console.log(detail.key)
    if(detail.key=="tab1"){
      this.setData({
        current: detail.key,
        tab1:true,
        tab2:false,
        isPay:false,
      });
    }
    
    if (detail.key == "tab2") {
      this.setData({
        current: detail.key,
        tab1: false,
        tab2: true,
        isPay:true,
      });
    }
   
  },
  addadd() {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询用户信息
    wx.request({
      url: app.globalData.baseUrl+'getUser',
      success:(res)=>{
        console.log(res.data.data[0].aid)
        this.setData({ defaultAdd: res.data.data[0].aid})
        //请求默认地址
        wx.request({
          url: app.globalData.baseUrl + 'addlist',
          data:{aid:this.data.defaultAdd},
          success:(res)=>{
            // console.log(res.data.data)
            this.setData({ defaultAddC: res.data.data[0]})
          }
        })
      }
    })
    var list = []
    var cart=JSON.parse(options.cart)
    var i=0
    for(var key in cart.list){
      list[i]=this.data.goods[key];
      list[i].count=cart.list[key];
      i++;
    }
    // list = [{ name: "ss", price: 2.00, count: 2, pic: "http://127.0.0.1:7001/img/food-list/1.jpg" }]
    this.setData({
      list
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