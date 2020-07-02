<template>
  <div class="default-page">
    <el-container class="container">
      <el-header class="header">
        <my-header />
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
      <el-footer class="footer">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index";
import MyFooter from "@/components/footer/index";
export default {
  mounted() {
    window.console.log("default");
  },
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
@import "../assets/css/public/default.scss";
</style>
