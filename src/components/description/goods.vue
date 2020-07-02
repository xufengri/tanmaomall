<template>
  <el-row>
    <pic-show :shopsPictureList="goods.cover" />
    <goods-choose :shops="goods" :storeName="goods.storeName" />
  </el-row>
</template>

<script>
import picShow from "./picShow";
import goodsChoose from "./goodsChoose";
export default {
  props: ["goods"],
  components: {
    picShow,
    goodsChoose
  }
};
</script>
