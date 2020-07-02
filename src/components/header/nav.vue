<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#999"
      active-text-color="#999"
    >
      <el-submenu class="submenu" index="1">
        <template slot="title">我的淘宝</template>
        <el-menu-item index="1-1" @click="toAlreadyPurchased"
          >已买到的宝贝</el-menu-item
        >
        <el-menu-item index="1-2">已卖出的宝贝</el-menu-item>
      </el-submenu>
      <el-menu-item @click="toCart" class="submenu cart" index="2">
        <el-badge :value="cartNum" class="item">
          <i class="el-icon-shopping-cart-full"></i>
          购物车
        </el-badge>
      </el-menu-item>
      <el-submenu class="submenu" index="3">
        <template slot="title">收藏夹</template>
        <el-menu-item index="3-1">收藏的宝贝</el-menu-item>
        <el-menu-item index="3-2">收藏的店铺</el-menu-item>
      </el-submenu>
      <el-menu-item class="submenu" index="4">
        <i class="el-icon-mobile-phone"></i>
        手机版</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  computed: {
    ...mapGetters("userInfo", {
      cartNum: "shoppingCartLength"
    })
  },
  methods: {
    toCart() {
      this.$router.push({
        path: "/Cart"
      });
    },
    toAlreadyPurchased() {
      this.$router.push({
        path: "/AlreadyPurchased"
      });
    }
  }
};
</script>

<style lang="scss" y>
@import "../../assets/css/public/header/nav.scss";
</style>
