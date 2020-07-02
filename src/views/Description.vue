<template>
  <div class="page-description">
    <store-search v-if="goods" :storeName="goods.storeName" />
    <fixed-search />
    <div class="description-wrapper">
      <div class="content-top">
        <Goods v-if="goods" :goods="goods" />
      </div>
      <div class="content-bottom">
        <el-row>
          <Store v-if="goods" :goods="goods" />
          <el-col :span="20" class="commodity-detail">
            <Detail
              v-if="goods && goods.commodityDetail"
              :commodityDetail="goods.commodityDetail"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import storeSearch from "@/components/header/storeSearch";
// import Shops from "../data/shops.js";
import fixedSearch from "@/components/fixedSearch.vue";
import Goods from "../components/description/goods";
import Detail from "../components/description/detail";
import Store from "../components/description/store";
import axios from "../axios";

export default {
  data() {
    return {
      goods: null
    };
  },
  components: {
    storeSearch,
    fixedSearch,
    Goods,
    Detail,
    Store
  },
  created() {
    const produceId = this.$route.query.produceId;
    // window.console.log(shopsId);
    axios
      .get("http://127.0.0.1:12315/getProduce?produceId=" + produceId)
      .then(res => {
        window.console.log(res);
        this.goods = res.data.produce[0];
      });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/description/description.scss";
</style>
