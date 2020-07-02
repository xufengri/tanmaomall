import Vue from "vue";
import Vuex from "vuex";
import order from "./order";
import userInfo from "./userInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   shoppingCart: [],
  //   shopsGather: {
  //     shopsId: 2,
  //     storeName: "回力甲乙丙丁专卖店",
  //     storeNameYear: 6,
  //     imgUrl: "/images/shoes_1.jpg",
  //     title: "回力男鞋帆布鞋男白布鞋学生休闲鞋男韩版小白鞋板鞋男潮",
  //     shops: {
  //       commodityDetail: [
  //         [
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           }
  //         ],
  //         [
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           }
  //         ],
  //         [
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           }
  //         ],
  //         [
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           }
  //         ],
  //         [
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           },
  //           {
  //             auctionSku: "颜色分类:WB-8白色;尺码:41[偏大一码 拍小一码]",
  //             displayUserNick: "格***边",
  //             rateContent: "不错不错 挺好的 穿上也挺好的，质量的话一般吧",
  //             rateDate: "2018-07-30 09:10:29"
  //           }
  //         ]
  //       ],
  //       shopsPictureList: [
  //         "/images/huili_shoes_1.jpg",
  //         "/images/huili_shoes_2.jpg"
  //       ],
  //       goodsInformation: {
  //         title: "回力男鞋帆布鞋男白布鞋学生休闲鞋男韩版小白鞋板鞋男潮",
  //         price: "112.00",
  //         size: [
  //           "34",
  //           "35",
  //           "36",
  //           "37",
  //           "38",
  //           "39",
  //           "40",
  //           "41",
  //           "42",
  //           "43",
  //           "44"
  //         ],
  //         color: ["#fff", "#000"],
  //         colorName: ["白色", "黑色"],
  //         cumulativeEvaluation: 48
  //       }
  //     }
  //   },
  //   userInfo: {},
  //   userInfoArray: [
  //     {
  //       user: "hhh",
  //       tel: 12312312318,
  //       pwd: 11111111,
  //       address: ["杭州富阳"]
  //     }
  //   ]
  // },
  modules: {
    order,
    userInfo
  }
});
