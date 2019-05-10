// pages/addadd/addadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  save(e){
    var addressee=e.detail.value.addressee;
    var sex = e.detail.value.sex;
    var phone = e.detail.value.phone;
    // var address = e.detail.value.address;
    var address="dizhidizhi"
    var subaddress = e.detail.value.subaddress;
    if(e.detail.value.isdefault.length==0){var isdefault=0}
    else{var isdefault=1};
    var query = `addressee=${addressee}&sex=${sex}&phone=${phone}&address=${address}&subaddress=${subaddress}&isdefault=${isdefault}`
    wx.request({
      url: 'http://127.0.0.1:7001/addadd',
      data:{
        addressee:addressee,
        sex:sex,
        phone,
        address,
        subaddress,
        isdefault
      },
      success:function(res){
        if(res.data.code==1){
          wx.showToast({
            title: '添加成功',
          })
        }else{
          wx.showToast({
            title: '添加失败',
          })
        }
      }
    })
  },
  locate(){
    console.log("拉起定位");
    wx.openLocation({
      longitude:100,
      latitude: 39.970830,
      scale: 14,
      name: ''
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