<template>
  <el-col :span="4" class="shops-introduce">
    <div class="introduce-wrap">
      <div class="introduce-wrap-top" v-if="goods">
        <span>{{ goods.storeName }}</span>
      </div>
      <div class="introduce-wrap-bottom">
        <p class="storeNameYear" v-if="goods">
          <span>{{ goods.storeNameYear }}</span>
          <span>天狗{{ goods.storeNameYear }}年店</span>
        </p>
        <p class="storeName-btn">
          <el-button>进店逛逛</el-button>
          <el-button type="info" plain>收藏店铺</el-button>
        </p>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: ["goods"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/description/store.scss";
</style>
