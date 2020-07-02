<template>
  <div class="page-error" @click="handleClick">
    <div>
      对不起，您访问的页面不存在。
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-error {
  width: auto;
  height: 100vh;
  font-size: 80px;
  color: #fff;
  background-color: #000;
  text-align: center;
  line-height: 800px;

  div {
    display: inline;
    background-image: linear-gradient(
      90deg,
      #fc0814 0%,
      rgb(224, 31, 73) 10%,
      rgb(225, 31, 231) 15%,
      rgb(128, 11, 238) 20%,
      rgb(69, 10, 233) 25%,
      rgb(8, 245, 213) 30%,
      rgb(10, 252, 139) 40%,
      rgb(75, 231, 3) 50%,
      rgb(118, 245, 13) 60%,
      rgb(149, 226, 5) 70%,
      rgb(241, 158, 2) 80%,
      rgb(245, 122, 8) 90%,
      rgb(247, 10, 10) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
}
</style>
