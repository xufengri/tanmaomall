<template>
  <div class="page-index">
    <Search />
    <fixed-search />
    <el-carousel class="swipe-wrap" :interval="5000" arrow="never">
      <el-carousel-item class="swipe" v-for="item in swipeImg" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="index-content">
      <div class="classification">
        <my-menu />
      </div>
      <div class="shop-show" v-for="i in 7" :key="i">
        <h4 class="show-title">美丽人生FASHION & BEAUTY</h4>
        <shops-show />
      </div>
    </div>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu.vue";
import ShopsShow from "@/components/index/shopsShow.vue";
import Search from "@/components/header/indexSearch.vue";
import fixedSearch from "@/components/fixedSearch.vue";
export default {
  data() {
    return {
      swipeImg: [
        "//img.alicdn.com/imgextra/i4/174/O1CN01g17zdy1D9jULjrXyq_!!174-0-luban.jpg_q100.jpg_.webp",
        "https://img.alicdn.com/simba/img/TB1pL6ZfUH1gK0jSZSySuttlpXa.jpg",
        "//img.alicdn.com/imgextra/i1/63/O1CN01BySN801CKtWWdMEZ6_!!63-0-luban.jpg_q100.jpg_.webp",
        "//img.alicdn.com/imgextra/i4/55251/O1CN01KLRc6L1of0JV7hrsO_!!55251-0-lubanu.jpg_q100.jpg_.webp"
      ]
    };
  },
  mounted() {
    window.console.log("index");
  },
  components: {
    MyMenu,
    ShopsShow,
    Search,
    fixedSearch
  }
};
</script>

<style lang="scss">
.page-index {
  .swipe-wrap {
    margin: 45px 0;
    &,
    .el-carousel__container,
    .swipe {
      height: 500px;
    }
    .swipe {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .index-content {
    width: 1190px;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    .classification {
      position: absolute;
      top: -541px;
      left: 0;
      z-index: 9999;
    }
    .shop-show {
      margin: 30px 0;
      .show-title {
        font-size: 20px;
        padding-left: 10px;
        margin: 5px 0;
        border-left: 3px solid #000;
      }
    }
  }
}
</style>
