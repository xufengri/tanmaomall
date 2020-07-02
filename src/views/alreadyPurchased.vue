<template>
  <div class="already-page">
    <div class="title">订单详情</div>
    <div
      class="dinamicx-card-group"
      v-for="(i, index) in orderList"
      :key="index"
    >
      <div class="order-Info">
        <div class="order-orderInfo">
          <img src="../assets/TB1CzD7SXXXXXXJaXXXXXXXXXXX-32-32.png" alt />
          <span class="shop-name">店铺:&nbsp;</span>
          <a href="#">{{ i.storeName }}</a>
          <span class="ww-light ww-small">
            <img src="../assets/T15AD7FFFaXXbJnvQ_-130-60.gif" alt srcset />
          </span>
        </div>
      </div>
      <div class="item">
        <div class="order-item">
          <div class="item-row">
            <div class="item-info">
              <div class="info-detail info-cell">
                <div>
                  <img
                    :src="i.cover"
                    style="display: block;width: 50px;height: 50px;"
                  />
                </div>
                <div class="info-cell info-msg">
                  <a href class="info-title">{{ i.produceName }}</a>
                </div>
              </div>
            </div>
            <div class="info-sku info-cell">
              <p style="display:flex;margin-top:0px">
                颜色分类:&nbsp;&nbsp;{{ i.auctionSku }}
              </p>
            </div>
            <div class="info-price info-cell">{{ i.price }}</div>
          </div>
          <div class="order-quantity">
            {{ i.qty }}
          </div>
          <div class="item-row__select">
            <div class="select-container">
              <div class="select__wrap">
                <div style="display: inline-block;">
                  <span class="select__one-label"
                    >当前状态：{{ i.isdelivery ? "已发货" : "未发货" }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="item-row__price">
            <div class="label item-row__price-item">
              <span
                style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 0, 54); font-size: 14px; min-width: 100px;"
                >{{ i.price * i.qty }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="confirmAddr-addr">
        <span class="confirmAddr-title">收货地址：</span>
        <span class="confirmAddr-addr-bd">
          {{ i.province }}&nbsp;{{ i.city }}&nbsp;{{ i.originPlace }}&nbsp;{{
            i.detailAddress
          }}
        </span>
      </div>
      <div class="confirmAddr-addr-user">
        <p>
          <span>收货人：</span>
          <span style="padding-right: 20px;">
            {{ i.consignee }}
          </span>
        </p>
        <p>
          <span>收货电话：</span>
          <span style="padding-right: 20px;">
            {{ i.tel }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  created() {
    axios
      .get("http://127.0.0.1:12315/getOrderList?offset=0&limit=100")
      .then(res => {
        window.console.log(res.data.rows);
        this.orderList = res.data.rows;
      });
  },
  data() {
    return {
      orderList: []
    };
  }
};
</script>

<style lang="scss" scoped>
.already-page {
  width: 1190px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin: 40px 0;
    font-size: 30px;
    font-weight: 700;
  }
  .dinamicx-card-group {
    display: flex;
    width: 1190px;
    height: 200px;
    padding: 10px;
    background-color: #fff;
    flex-direction: column;
    align-content: flex-start;
    .order-Info {
      height: 52px;
      align-items: center;
      .order-orderInfo {
        padding-bottom: 5px;
        margin-top: 25px;
        border-bottom: 1px dotted #80b2ff;
        height: 27px;
        flex-direction: row;
        display: flex;
        font-size: 13px;
        text-align: center;
        .ww-light {
          margin-left: 5px;
          overflow: hidden;
          width: 20px;
          height: 20px;
          // overflow: hidden;
          img {
            width: 98px;
            height: 69px;
            margin-left: -62px;
            margin-top: -4px;
          }
        }
        img {
          width: 18px;
          height: 18px;
          margin-left: 1px;
        }
        span {
          margin-left: 7px;
        }
        a {
          text-decoration: none;
          color: #3c3c3c;
        }
        a:hover {
          color: red;
        }
      }
    }
    .item {
      height: 108.8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      margin: 0px;
      padding: 0px;
      background-color: rgb(251, 252, 255);
      border-bottom: 1px dotted rgb(221, 221, 221);
      box-sizing: border-box;
      .order-item {
        width: 1190px;
        height: 75px;
        display: flex;
        .item-row {
          display: flex;
          width: 558px;
          height: 74px;
          .item-info {
            .info-detail {
              display: flex;
              width: 245px;
              padding: 10px 0 10px 10px;
              .info-msg {
                padding-left: 10px;
                vertical-align: top;
                width: 190px;
                height: 35.92px;
                display: flex;
                flex-direction: column;
                .info-title {
                  color: #3c3c3c;
                  width: 180px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: block;
                  font-size: 12px;
                  text-decoration: none;
                }
                .info-title:hover {
                  color: red;
                }
                .info-icon-list {
                  display: flex;
                  flex-direction: row;
                  div {
                    margin-left: 2px;
                  }
                  :last-child {
                    width: 20px;
                    height: 17px;
                  }
                }
              }
              .info-cell {
                display: inline-block;
                margin-right: 1px;
              }
            }
            .info-cell {
              box-sizing: content-box;
              margin-right: 1px;
            }
          }
          .info-sku {
            color: #6c6c6c;
            width: 180px;
            display: inline-block;
            vertical-align: top;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            font-size: 12px;
          }
          .info-price {
            color: #3c3c3c;
            vertical-align: top;
            display: inline-block;
            width: 120px;
            text-align: center;
            padding: 13px 0;
            font-size: 12px;
          }
        }
        .order-quantity {
          display: block;
          text-align: center;
          width: 120px;
          padding: 10px 0;
          margin-right: 1px;
          .el-input-number {
            width: 120px;
          }
        }
        .item-row__select {
          display: inline-block;
          width: 180px;
          vertical-align: top;
          height: 75px;
          text-align: center;
          .select-container {
            display: inline-block;
            .select__one-label {
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              max-width: 126px;
              display: inline-block;
              vertical-align: middle;
            }
            .select__wrap {
              padding: 10px 0 5px;
              width: 100%;
              .select__inline {
                display: inline-block;
              }
              .select-tips {
                text-align: left;
                vertical-align: top;
                line-height: 26px;
                .wtip-icon {
                  width: 14px;
                  height: 14px;
                  line-height: 14px;
                  display: inline-block;
                  vertical-align: middle;
                  cursor: pointer;
                  margin-left: 0;
                  position: relative;
                }
              }
            }
          }
        }
        .item-row__price {
          display: inline-block;
          width: 130px;
          text-align: right;
          padding-right: 13px;
          .item-row__price-item {
            padding: 10px 0 5px;
          }
          .label {
            display: inline-block;
          }
        }
      }
      .public {
        height: 32.8px;
        display: flex;
        .service-title {
          font-size: 12px;
          width: 60px;
          text-align: right;
          display: inline-block;
          vertical-align: top;
        }
        .service-content {
          display: inline-block;
          width: 930px;
          .check-item {
            display: flex;
            .sprice-field {
              width: 120px;
              text-align: center;
              margin-right: 1px;
              font-size: 12px;
            }
          }
        }
        .title-field {
          width: 375px;
          display: inline-block;
          text-align: left;
          .check-box {
            margin-right: 5px;
            display: flex;
          }
        }
        .num-field {
          width: 118px;
          font-size: 12px;
        }
        .promo-field {
          width: 274px;
          height: 1px;
          display: inline-block;
          margin-right: 1px;
          text-align: center;
        }
        .tprice-field {
          display: flex;
          padding-right: 5px;
          font-weight: 700;
          font-size: 14px;
        }
      }
    }
    .orderExt {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      margin: 0px;
      padding: 0px;
      height: 168.33px;
      background-color: rgb(242, 247, 255);
      border-bottom: 1px dotted rgb(128, 178, 255);
      box-sizing: border-box;
      .ExtUpper {
        width: 1190px;
        height: 114.53px;
        box-sizing: border-box;
        display: flex;
        .Extleft {
          border: 1px solid#fff;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .invoiceleft {
            height: 40px;
            padding: 5px;
            border: 1px solid rgb(255, 255, 255);
            .invoice-box {
              padding: 10px;
              display: flex;
              width: 484px;
              height: 27px;
              .check {
                display: block;
                width: 16px;
                height: 16px;
                background: #fff;
                border-radius: 3px;
                border: 1px solid #c4c6cf;
                transition: all 0.1s linear;
                text-align: left;
                box-shadow: none;
              }
              span {
                font-size: 12px;
                text-align: center;
              }
            }
          }
          .textarea {
            padding: 10px;
            height: 63px;
            width: 484px;
            display: flex;
            span {
              font-size: 12px;
              padding-left: 11px;
            }
          }
        }
        .Extright {
          width: 471px;
          border: 1px solid#fff;
          box-sizing: border-box;
          .invoiceright {
            border: 1px solid#fff;
            height: 53px;
            box-sizing: border-box;
            .invoice-box2 {
              padding: 10px;
              display: flex;
              height: 27px;
              text-align: center;
              line-height: 27px;
              span {
                font-size: 12px;
                padding-right: 15px;
              }
              h5 {
                display: contents;
                color: red;
              }
            }
          }
          .fee {
            height: 59px;
            display: flex;
            .order-postageInsurance {
              padding: 10px 0;
              line-height: 19px;
              text-align: left;
              height: 19px;
              width: 467px;
              display: flex;
              .user-title {
                width: 61px;
                padding-right: 11px;
                text-align: right;
                font-size: 12px;
              }
              .user-operate {
                display: flex;
                .check {
                  width: 15px;
                  height: 15px;
                }
                .trigger {
                  display: block;
                  background-color: #36ab67;
                  color: #fff;
                  font-size: 12px;
                }
                .user-content {
                  font-size: 12px;
                  line-height: 25px;
                  margin-left: 3px;
                }
                .widget-tips-box {
                  margin-left: 5px;
                  img {
                    width: 14px;
                    height: 14px;
                    margin-top: 5px;
                  }
                }
              }
              h5 {
                color: red;
                display: contents;
              }
            }
          }
        }
      }
      .toll {
        height: 50px;
        .label_header {
          width: 1190px;
          height: 32px;
          padding: 10px 0 10px 0;
          display: flex;
          justify-content: flex-end;
          .orderPay {
            text-align: left;
            width: 185px;
            height: 30px;
            span {
              font-size: 14px;
              font-weight: bold;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
