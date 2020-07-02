<template>
  <el-col :span="15" class="commodity-right">
    <div class="goods-table">
      <h4 class="goods-title" v-if="shops && shops.produceName">
        {{ shops.produceName }}
      </h4>
      <p class="goods-tr price" v-if="shops && shops.price">
        <span class="goods-parameter">价格</span>
        <span>￥{{ shops.price }}</span>
      </p>
      <p class="goods-tr freight">
        <span class="goods-parameter">运费</span>
        <el-cascader :options="options" :show-all-levels="false"></el-cascader>
        <span>快递：0.00</span>
      </p>
      <el-divider></el-divider>
      <p
        v-if="
          shops &&
            (shops.cumulativeEvaluation == 0 || shops.cumulativeEvaluation)
        "
        class="goods-tr cumulativeEvaluation"
      >
        <span class="goods-parameter">累计评价</span>
        <span>{{ shops.cumulativeEvaluation }}</span>
      </p>
      <el-divider></el-divider>
      <p class="goods-tr" v-if="shops && shops.style && shops.style.length">
        <span class="goods-parameter">款式</span>
        <span
          v-for="(item, index) in shops.style"
          :key="index"
          class="span-btn"
          :class="{ 'action-span-btn': index == designIndex }"
          @click="designSelect(item, index)"
        >
          {{ item }}
        </span>
      </p>
      <p class="goods-tr" v-if="shops && shops.size && shops.size.length">
        <span class="goods-parameter">尺码</span>
        <span
          v-for="(item, index) in shops.size"
          :key="index"
          class="span-btn"
          :class="{ 'action-span-btn': index == sizeIndex }"
          @click="sizeSelect(item, index)"
        >
          {{ item }}
        </span>
      </p>
      <p
        class="goods-tr goods-size"
        v-if="shops && shops.color && shops.color.length"
      >
        <span class="goods-parameter">颜色分类</span>
        <span>
          <span
            v-for="(item, index) in shops.color"
            :key="index"
            class="span-btn"
            :class="{ 'action-span-btn': index == colorIndex }"
            @click="colorSelect(item, index)"
          >
            {{ item }}
          </span>
        </span>
      </p>
      <p class="goods-tr goods-count">
        <span class="goods-parameter">数量</span>
        <el-input-number
          v-model="count"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="50000"
        ></el-input-number>
      </p>
      <p class="goods-tr goods-btn">
        <el-button
          class="goods-add"
          type="danger"
          plain
          icon="el-icon-shopping-cart-2"
          @click="addCart"
          >加入购物车</el-button
        >
        <el-button @click="buyShops" class="goods-buy" type="danger"
          >立即购买</el-button
        >
      </p>
    </div>
  </el-col>
</template>

<script>
import options from "../../data/cityProvince.js";
import axios from "../../axios";
import Qs from "qs";
export default {
  props: ["shops", "storeName"],
  data() {
    return {
      options: options.options,
      count: 1,
      size: null,
      color: "",
      colorIndex: 0,
      sizeIndex: 0,
      designIndex: 0
    };
  },
  methods: {
    // 尺寸的选择
    sizeSelect(size, index) {
      this.size = size;
      this.sizeIndex = index;
    },
    // 颜色的选择
    colorSelect(color, index) {
      this.color = color;
      this.colorIndex = index;
      this.jSelected = index;
    },
    // 记录购买数量
    handleChange(count) {
      this.count = count;
    },
    // 款式记录
    designSelect(design, index) {
      this.design = design;
      this.designIndex = index;
    },
    _createShop() {
      const _this = this;
      const shopInfo = _this.shops;
      let auctionSku = "";
      shopInfo.color.length &&
        (auctionSku += `颜色分类:${shopInfo.color[_this.colorIndex]};`);
      shopInfo.size.length &&
        (auctionSku += `尺码:${shopInfo.size[_this.sizeIndex]};`);
      shopInfo.style.length &&
        (auctionSku += `款式:${shopInfo.style[_this.designIndex]}`);
      if (!auctionSku) {
        auctionSku = null;
        window.console.log(auctionSku);
      }
      return {
        shopsImg: _this.shops.cover[0],
        storeName: _this.storeName,
        shopsTitle: _this.shops.produceName,
        shopsPrice: _this.shops.price,
        auctionSku: auctionSku,
        count: _this.count,
        totalPrice: _this.shops.price * _this.count,
        checked: true
      };
    },
    addCart() {
      const shop = this._createShop();
      const order = {
        style: shop.auctionSku,
        produceId: this.shops.id,
        qty: shop.count
      };
      window.console.log(shop);
      axios
        .post("http://127.0.0.1:12315/api/addCart", Qs.stringify(order))
        .then(res => {
          window.console.log(res);
        });
    },
    buyShops() {
      const orderShops = this._createShop();
      Object.assign(orderShops, { id: this.shops.id });
      this.$store.commit("order/addBuyShop", { orderShops });
      window.console.log(orderShops);
      this.$router.push({
        path: "/Pay"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/description/goodsChoose.scss";
</style>
