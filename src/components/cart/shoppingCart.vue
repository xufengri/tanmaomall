<template>
  <div class="page">
    <div class="cart">
      <!-- 全部商品 cart-filter-bar -->
      <div class="cart-filter-bar">
        <a href="#">全部商品</a>
        <div class="wrap-line"></div>
      </div>

      <!-- 商品cart-main -->
      <div class="cart-main">
        <!-- 商品表cart-table -->
        <div class="cart-table">
          <div class="tb-inner">商品信息</div>
          <ul>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
          </ul>
        </div>
        <div v-for="(item, index) in cart" :key="index">
          <!-- 商品单cartList -->
          <div class="cartList">
            <span class="shopName">店铺：{{ item.storeName }}</span>
          </div>

          <!-- 商品具体信息shop-list -->
          <div class="shops-list">
            <ul class="shops-content">
              <li class="shopsChk">
                <input
                  class="shopsChks"
                  type="checkbox"
                  :checked="item.checked ? 'checked' : ''"
                  @click="goodsCheck(index)"
                />
              </li>
              <li class="shopsImg"><img :src="item.cover" alt="" /></li>
              <li class="shopsTitle">{{ item.produceName }}</li>
              <li class="auctionSku">{{ item.style }}</li>
              <li class="shopsPrice">￥{{ getFloatStr(item.price) }}</li>
              <li class="shopsAmout">
                <el-input-number
                  v-model="item.qty"
                  @change="handleChange"
                  :min="1"
                  :max="100000"
                ></el-input-number>
              </li>
              <li class="shopsSum">
                ￥{{ getFloatStr(item.price * item.qty) }}
              </li>
              <li class="shopsOp">
                <span @click="deleteCart(index)">删除</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 商品总操作shop-holder -->
        <div class="shop-holder">
          <div class="all-check">
            <input
              type="checkbox"
              :checked="checked"
              @click="handleClick"
            />全选
          </div>
          <div class="del">
            <a href="#">删除</a>
          </div>
          <div class="holder-right">
            <div class="price-sum">
              合计：
              <em>￥{{ getFloatStr(allTotalPrice) }}</em>
            </div>
            <div class="btn-area">
              <a href="#">
                <span @click="payMoney">结算</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cart"],
  data() {
    return {
      num: 1,
      allTotalPrice: 0,
      checked: ""
    };
  },
  methods: {
    goodsCheck(i) {
      if (this.cart[i].checked) {
        this.cart[i].checked = false;
        this.checked = "";
      } else {
        this.cart[i].checked = true;
      }
      this.refreshAllTotalPrice();
    },
    handleClick() {
      if (this.checked) {
        window.console.log(this.goods);
        this.checked = "";
        this.cart.forEach(item => {
          if (item.checked) {
            item.checked = false;
          }
        });
      } else {
        window.console.log(2);
        window.console.log(this.cart);
        this.checked = "checked";
        this.cart.forEach(item => {
          if (!item.checked) {
            item.checked = true;
          }
        });
      }
      this.refreshAllTotalPrice();
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
    handleChange() {
      this.refreshAllTotalPrice();
    },
    refreshAllTotalPrice() {
      this.allTotalPrice = 0;
      this.cart.forEach(item => {
        if (item.checked) {
          this.allTotalPrice += parseInt(item.price * item.qty);
        }
      });
    },
    payMoney() {
      window.console.log(this.cart);
      const buyProduce = [];
      this.cart.forEach(ele => {
        if (!ele.checked) {
          return;
        }
        const data = {
          id: ele.goodsId,
          auctionSku: ele.style,
          count: ele.qty,
          shopsImg: ele.cover,
          shopsPrice: ele.price,
          shopsTitle: ele.produceName,
          storeName: ele.storeName,
          allTotalPrice: ele.price * ele.qty
        };
        buyProduce.push(data);
      });
      // const data
      this.$store.commit("order/addBuyShop", { orderShops: buyProduce });
      this.$router.push({
        path: "/Pay"
      });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.page {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
a:hover {
  color: #f40;
  text-decoration: underline;
}
ul {
  list-style: none;
  display: block;
}
img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(187, 186, 186);
}
input {
  font-size: 100%;
  width: 15px;
  height: 15px;
}
.cart {
  min-height: 400px;
  width: 1190px;
  margin: 0 auto;
}

/* 全部商品 cart-filter-bar */
.cart-filter-bar {
  overflow: hidden;
  font-size: 12px;
  position: relative;
}
.cart-filter-bar a {
  padding-left: 15px;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #f40;
  margin-left: 5px;
}
.wrap-line {
  clear: both;
  background: #e6e6e6;
  height: 2px;
  position: relative;
  margin-top: 8px;
}

/* 商品 cart-main */
.cart-main {
  min-height: 210px;
}
.cartList {
  margin-top: 20px;
  margin-left: 20px;
}
/* 商品表 */
.cart-table {
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  color: #3c3c3c;
}
.cart-table .tb-inner {
  width: 342px;
  float: left;
  padding-left: 40px;
}
.cart-table ul {
  float: left;
  width: 560px;
  float: right;
}
.cart-table ul li {
  width: 140px;
  display: inline-block;
  text-align: center;
}

/* 商品具体信息shop-list */
.shops-list {
  min-height: 200px;
  margin: 10px 0 10px 0;
  border: 1px solid #ccc;
  text-align: center;
}
.shops-list .shops-content {
  background: #fcfcfc;
  border-bottom: 1px solid #e7e7e7;
  height: 200px;
  padding-top: 60px;
}
.shops-content li {
  display: inline-block;
  width: 163px;
  float: left;
  padding: 10px;
}

.shops-content li:first-child {
  width: 30px;
}
.shops-content .shopsChk {
  margin-top: 0;
  width: 50px;
  height: 119px;
}
.shops-content .shopsImg {
  width: 140px;
}
.shops-content .shopsTitle {
  color: #3c3c3c;
}
.shops-content .auctionSku {
  color: #9c9c9c;
}
.shops-content .shopsPrice {
  color: #3c3c3c;
  font-weight: 700;
  font-family: Verdana, Tahoma, arial;
}
.shops-content .shopsAmout {
  width: 120px;
}
.shops-content .shopsAmout .el-input-number {
  width: 120px;
}
.shops-content .shopsAmout .el-input-number span {
  width: 30px;
}
.shops-content .shopsSum {
  color: #f40;
  font-weight: 700;
  width: 140px;
  font-size: 20px;
}
.shops-content .shopsOp {
  width: 100px;
}

/* 商品总操作shop-holder */
.shop-holder {
  width: 1190px;
  height: 50px;
  background-color: #e5e5e5;
  line-height: 50px;
}
.shop-holder .all-check {
  margin-left: 10px;
  float: left;
  cursor: pointer;
}
.shop-holder .del a {
  color: #000;
  margin-left: 25px;
  float: left;
}
.shop-holder .del a:hover {
  color: #f40;
}
.shop-holder .holder-right {
  float: right;
  height: 50px;
  width: 260px;
}
.shop-holder .holder-right .price-sum {
  float: left;
}
.shop-holder .holder-right .price-sum em {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #f40;
  padding: 0 3px;
}
.shop-holder .holder-right .btn-area {
  height: 110px;
}
.shop-holder .holder-right .btn-area a span {
  color: #fff;
  display: inline-block;
  float: right;
  width: 110px;
  height: 50px;
  line-height: 50px;
  background: #f40;
  text-align: center;
  font-family: "Lantinghei SC", "Microsoft Yahei";
  font-size: 20px;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
}
.shop-holder .holder-right .btn-area a span:hover {
  background-color: #f22d00;
}
</style>
