<template>
  <div class="search">
    <el-row class="search-container">
      <el-col :span="7" class="logo">
        <a href="#">
          <i class="logoPic"></i>
        </a>
      </el-col>
      <el-col :span="16" class="input-content">
        <el-input class="search-input" placeholder="请输入内容"></el-input>
        <el-button type="primary" class="search-btn">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     storeName: 'jeep吉普高博专卖店',

  //   }
  // }
  props: ["storeName"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/public/header/search.scss";
</style>
