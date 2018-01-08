//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0, //预设当前项的值
    imgTab: 0, //预设轮播图当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    categories: [
      { id: 0, name: '关于我们' },
      { id: 1, name: '官网展示' },
      { id: 2, name: '使用介绍' },
      { id: 3, name: '健康' },
      { id: 4, name: '职场' },
      { id: 5, name: '其他' },
    ],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
    console.log(e);
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
})
