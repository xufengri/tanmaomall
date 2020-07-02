<template>
  <div class="page-pay">
    <div class="top">
      <div class="top_img">
        <img
          src="../assets/TB11ojWRXXXXXafaFXXXXXXXXXX-190-27 (1).png"
          alt
          srcset
        />
      </div>
      <div class="step">
        <el-steps :active="active" finish-status="success">
          <el-step title="拍下商品"></el-step>
          <el-step title="付款到支付宝"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="评价"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="payGoods" v-if="!payMoney">
      <div class="address">
        <div class="order-address">
          <div class="header-wrapper">
            <h5>选择收货地址</h5>
          </div>
          <div class="address-list">
            <el-row
              :gutter="24"
              style="display:flex;align-items: center;margin: 0;"
            >
              <el-col :span="6" v-for="(i, index) in addressList" :key="index">
                <div
                  class="grid-content"
                  @click="changeImg(index)"
                  :class="{
                    'bg-purple-red': index == redIndex,
                    'bg-purple': index !== redIndex
                  }"
                >
                  <div class="inner-infos">
                    <div class="addr-hd">
                      <span class="province">{{ i.province }}</span>
                      <span class="city">{{ i.city }}</span>
                      <span class="name">({{ i.consignee }}收)</span>
                    </div>
                    <div class="addr-bd">
                      <span class="address1">{{ i.originPlace }}</span>
                      <span class="address3">{{ i.detailAddress }}</span>
                    </div>
                    <a title="修改地址" @click="editModel(index)">修改</a>
                  </div>
                </div>
              </el-col>
              <el-button
                style="height: 40px; margin-left: 10px"
                type="primary"
                @click="addAddress"
                >新增地址</el-button
              >
              <el-dialog title="收货地址" :visible.sync="ifModel">
                <el-form :model="addressForm" :rules="rules" ref="addressForm">
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="addressForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="电话" prop="phone">
                    <el-input v-model="addressForm.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="省份" prop="province">
                    <el-input v-model="addressForm.province"></el-input>
                  </el-form-item>
                  <el-form-item label="城市" prop="city">
                    <el-input v-model="addressForm.city"></el-input>
                  </el-form-item>
                  <el-form-item label="所属" prop="addressone">
                    <el-input v-model="addressForm.addressone"></el-input>
                  </el-form-item>
                  <el-form-item label="详细地址" prop="addressthree">
                    <el-input v-model="addressForm.addressthree"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="close">取 消</el-button>
                  <el-button type="primary" @click="closeModel('addressForm')"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </el-row>
          </div>
        </div>
      </div>
      <div class="orderDesc">
        <div class="header-wrapper">
          <h5>确认订单信息</h5>
        </div>
        <div class="item-headers-wrap item-headers-column-6">
          <div class="item-headers-content item-headers-0">店铺宝贝</div>
          <div class="item-headers-content item-headers-1">商品属性</div>
          <div class="item-headers-content item-headers-2">单价</div>
          <div class="item-headers-content item-headers-3">数量</div>
          <div class="item-headers-content item-headers-4">优惠方式</div>
          <div class="item-headers-content item-headers-5">小计</div>
        </div>
      </div>
      <div class="dinamicx-card-group" v-for="(i, index) in News" :key="index">
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
                      :src="i.shopsImg"
                      style="display: block;width: 50px;height: 50px;"
                    />
                  </div>
                  <div class="info-cell info-msg">
                    <a href class="info-title">{{ i.shopsTitle }}</a>
                    <div class="info-icon-list">
                      <div v-for="(i, index) in Pay" :key="index">
                        <img :src="i.img" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info-sku info-cell">
                <p style="display:flex;margin-top:0px">
                  颜色分类:&nbsp;&nbsp;{{ i.auctionSku }}
                </p>
              </div>
              <div class="info-price info-cell">{{ i.shopsPrice }}</div>
            </div>
            <div class="order-quantity">
              <el-input-number
                v-model="i.count"
                @change="handleChange"
                :min="1"
                :max="50000"
                label="描述文字"
              ></el-input-number>
            </div>
            <div class="item-row__select">
              <div class="select-container">
                <div class="select__wrap">
                  <div style="display: inline-block;">
                    <span class="select__one-label">省7:品牌钜惠</span>
                  </div>
                  <span class="widget-tips-box select-tips">
                    <img
                      src="../assets/TB1QFFkMXXXXXcNXFXXXXXXXXXX-32-32.png"
                      class="wtip-icon"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="item-row__price">
              <div class="label item-row__price-item">
                <span
                  style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 0, 54); font-size: 14px; min-width: 100px;"
                  >{{ i.totalPrice }}</span
                >
              </div>
            </div>
          </div>
          <div class="public">
            <div class="service-title">公益宝贝</div>
            <div class="service-content">
              <div class="check-item">
                <div class="title-field">
                  <label
                    class="next-checkbox-wrapper check-box checked disabled"
                  >
                    <span class="next-checkbox">
                      <span class="next-checkbox-inner">
                        <i class="next-icon next-icon-select next-xs"></i>
                      </span>
                      <input
                        disabled
                        type="checkbox"
                        aria-checked="true"
                        class="next-checkbox-input"
                        checked
                      />
                    </span>
                    <span class="title" style="font-size:12px"
                      >成交后卖家将捐赠0.02元给公益宝贝计划</span
                    >
                  </label>
                </div>
                <div class="sprice-field">0.00</div>
                <div class="num-field">1</div>
                <div class="promo-field"></div>
                <div class="tprice-field" style="color: rgb(255, 0, 54);">
                  0.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="orderExt">
          <div style="padding: 0px;border-top: 1px solid rgb(255, 255, 255);">
            <div class="ExtUpper">
              <div class="Extleft">
                <div class="invoiceleft">
                  <div class="invoice-box">
                    <input type="checkbox" name id class="check" />
                    <span>开具发票</span>
                  </div>
                </div>
                <div class="textarea">
                  <span>给卖家留言:</span>
                  <textarea
                    name
                    id
                    cols="30"
                    rows="10"
                    style="line-height: 35px; width: 328px;height: 36px;margin-left: 6px;border-radius: 8px;"
                    placeholder="选填,请先和商家协商一致"
                  ></textarea>
                </div>
              </div>
              <div class="Extright">
                <div class="invoiceright">
                  <div class="invoice-box2">
                    <span>运送方式:</span>
                    <span>普通配送&nbsp;快递&nbsp;免邮</span>
                    <div style="width: 234px;"></div>
                    <h5>0.00</h5>
                  </div>
                </div>
                <div class="fee">
                  <div class="order-postageInsurance">
                    <div class="user-title">运费险:</div>
                    <div class="user-operate">
                      <input type="checkbox" name id class="check" />
                      <span class="trigger">运费险</span>
                      <div class="user-content">卖家赠送，退换货可赔</div>
                      <span class="widget-tips-box">
                        <img src="../assets/111.png" alt />
                        <img src="../assets/？？？.png" alt />
                      </span>
                    </div>
                    <div style="width: 137px;"></div>
                    <h5>0.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="toll">
              <div class="label_header">
                <div class="orderPay">
                  店铺合计(含运费) &nbsp;
                  <span>{{ i.totalPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payway">
        <div style="padding:0px">
          <div class="rider">
            <el-radio-group v-model="radio">
              <el-radio :label="3">朋友代付</el-radio>
              <el-radio :label="6">匿名购买</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box__wrapper">
          <div class="box__shadow" style="height: 95px;">
            <div class="tollpay">
              <span
                style="font-weight: 700;color: #333;font-size: 12px;margin-right: 10px;"
                >实付款:</span
              >
              <span
                style="font-size: 26px;margin-right: 4px;color: #999;line-height:12px;"
                >¥</span
              >
              <span
                style="color: rgb(255, 0, 54);font: 700 26px tahoma;line-height:12px;"
                >{{ getFloatStr(allTotalPrice) }}</span
              >
            </div>
            <!-- 订单信息 -->
            <div class="order-confirmAddr">
              <div class="confirmAddr-addr">
                <span class="confirmAddr-title">寄送至：</span>
                <span class="confirmAddr-addr-bd" v-if="addressList[redIndex]"
                  >{{ addressList[redIndex].province }}&nbsp;{{
                    addressList[redIndex].city
                  }}&nbsp;{{ addressList[redIndex].originPlace }}&nbsp;{{
                    addressList[redIndex].detailAddress
                  }}</span
                >
              </div>
              <div class="confirmAddr-addr-user">
                <span>收货人：</span>
                <span style="padding-right: 20px;" v-if="addressList[redIndex]"
                  >{{ addressList[redIndex].consignee
                  }}{{ addressList[redIndex].tel }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submitOrder-container">
        <div class="wrapper">
          <div class="go-back">返回购物车</div>
          <div href="#" class="go-btn" @click="submitGoods">提交订单</div>
        </div>
      </div>
    </div>
    <div v-else class="paySuccess">
      <hr />
      <div>付款成功</div>
    </div>
    <Dialog
      :content="content"
      :dialogVisible="dialogVisible"
      @handleDialog="handleDialog"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Dialog from "../components/dialog/index";
import axios from "../axios";
import Qs from "qs";
export default {
  data() {
    return {
      addressForm: {
        addressone: "",
        addressthree: "",
        city: "",
        name: "",
        phone: "",
        province: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入收货人姓名", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请输入收货人手机号", trigger: "change" }
        ],
        province: [
          {
            required: true,
            message: "请输入收货省份",
            trigger: "change"
          }
        ],
        city: [
          {
            required: true,
            message: "请输入收货城市",
            trigger: "change"
          }
        ],
        addressone: [
          {
            required: true,
            message: "请输入收货所属",
            trigger: "change"
          }
        ],
        addressthree: [
          { required: true, message: "请输入详细地址", trigger: "change" }
        ]
      },
      payMoney: false,
      count: 1,
      total: null,
      labelPosition: "right",
      addname: "",
      addphone: "",
      addaddressone: "",
      addpro: "",
      addcity: "",
      addaddressthree: "",
      ifModel: false,
      index: null,
      mode: "add",
      radio: 3,
      msg: "hello vue!",
      active: 0,
      shop: [{ name: "复杂数码配件专营店", id: "001" }],
      allTotalPrice: 0,
      Pay: [
        { img: "/T1BCidFrNlXXaSQP_X-16-16.png" },
        { img: "/T1Vyl6FCBlXXaSQP_X-16-16.png" },
        { img: "/xcard.png" }
      ],
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      redIndex: 0,
      content: "请选择地址",
      dialogVisible: false,
      addressList: [{}]
    };
  },
  computed: {
    ...mapGetters("order", {
      News: "orderChange"
    })
    // ...mapGetters("userInfo", {
    //   addressList: "UpdateAddress"
    // })
  },
  created() {
    if (this.$store.state["order"].order.length) {
      this.refreshAllTotalPrice();
      axios.get("http://127.0.0.1:12315/api/getAddress").then(res => {
        this.addressList = res.data.data;
      });
    } else {
      window.alert("您没有访问权限！");
      this.$router.push({
        path: "/index"
      });
    }
  },
  components: {
    Dialog
  },
  methods: {
    changeImg(i) {
      this.redIndex = i;
    },
    close() {
      this.ifModel = false;
    },
    closeModel(ruleForm) {
      if (this.mode == "edit") {
        this.addressList[this.index].city = this.addressForm.city;
        this.addressList[this.index].consignee = this.addressForm.name;
        this.addressList[this.index].province = this.addressForm.province;
        this.addressList[this.index].tel = this.addressForm.phone;
        this.addressList[
          this.index
        ].detailAddress = this.addressForm.addressthree;
        this.addressList[this.index].originPlace = this.addressForm.addressone;
        axios
          .post(
            "http://127.0.0.1:12315/api/updateAddress",
            Qs.stringify(this.addressList[this.index])
          )
          .then(res => {
            window.console.log(res);
          });
        this.ifModel = false;
      } else if (this.mode == "add") {
        this.$refs[ruleForm].validate(valid => {
          if (valid) {
            const address = {
              city: this.addressForm.city,
              consignee: this.addressForm.name,
              detailAddress: this.addressForm.addressthree,
              originPlace: this.addressForm.addressone,
              province: this.addressForm.province,
              tel: this.addressForm.phone
            };
            this.addressList.push(address);
            axios
              .post(
                "http://127.0.0.1:12315/api/insertAddress",
                Qs.stringify(address)
              )
              .then(res => {
                window.console.log(res);
                this.addressList = res.data.address;
              });
            this.ifModel = false;
          } else {
            return false;
          }
        });
      }
    },
    editModel(i) {
      this.ifModel = true;
      this.addressForm.name = this.addressList[i].consignee;
      this.addressForm.phone = this.addressList[i].tel;
      this.addressForm.addressthree = this.addressList[i].detailAddress;
      this.addressForm.province = this.addressList[i].province;
      this.addressForm.city = this.addressList[i].city;
      this.addressForm.addressone = this.addressList[i].originPlace;
      window.console.log(this.addressForm);
      this.mode = "edit";
      this.index = i;
    },
    handleChange() {
      this.refreshTotalPrice();
      this.refreshAllTotalPrice();
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    getFloatStr(num) {
      num += "";
      num = num.replace(/[^0-9|.]/g, "");
      if (/^0+/.test(num)) num = num.replace(/^0+/, "");
      if (!/\./.test(num)) {
        num += ".00";
      }
      if (/^\./.test(num)) {
        //字符以.开头时,在开头添加0
        num = "0" + num;
      }
      num += "00"; //在字符串末尾补零
      num = num.match(/\d+\.\d{2}/)[0];
      return num;
    },
    addAddress() {
      this.ifModel = true;
      this.addressForm = {
        addressone: "",
        addressthree: "",
        city: "",
        name: "",
        phone: "",
        province: ""
      };
      this.mode = "add";
    },
    refreshAllTotalPrice() {
      this.allTotalPrice = 0;
      this.News.forEach(item => {
        item.totalPrice = this.getFloatStr(item.shopsPrice * item.count);
        this.allTotalPrice += +item.totalPrice;
      });
    },
    refreshTotalPrice() {
      this.News.forEach(item => {
        item.totalPrice = this.getFloatStr(item.shopsPrice * item.count);
      });
    },
    submitGoods() {
      if (this.addressList[this.redIndex]) {
        // this.active = 1;
        this.payMoney = true;
        const address = this.addressList[this.redIndex];
        const goods = [];
        this.News.forEach(item => {
          Object.assign(item, { addressId: address.id });
          const { addressId, auctionSku, count, id } = item;
          goods.push({ addressId, auctionSku, count, id });
        });

        window.console.log(goods);
        axios
          .post("http://127.0.0.1:12315/api/buyGoods", Qs.stringify(goods))
          .then(res => {
            window.console.log(res);
          });
        // this.addGoods({ goods });
        // this.$store.commit("userInfo/deleteShoppingCart");
        // this.deleteBuyShop();
      } else {
        this.dialogVisible = true;
      }
    },
    handleDialog() {
      this.dialogVisible = false;
    },
    ...mapMutations("userInfo", ["addGoods"]),
    ...mapMutations("order", ["deleteBuyShop"])
  }
};
</script>
<!-- 样式代码 -->
<style lang="scss">
@import "~@/assets/css/pay.scss";
</style>
