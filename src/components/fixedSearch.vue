<template>
  <el-collapse-transition>
    <div class="fixed" v-show="isFixed">
      <div class="fixed-search">
        <div class="logo">
          <span>
            xxxxx
          </span>
        </div>
        <el-input
          class="fixed-search-input"
          placeholder="请输入内容"
        ></el-input>
        <el-button type="danger" class="fixed-search-btn el-icon-search"
          >搜索</el-button
        >
      </div>
    </div>
  </el-collapse-transition>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed {
  width: 100%;
  background-color: #ff0036;
  text-align: center;
  line-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  .fixed-search {
    width: 1190px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 145px;
      height: 70px;
      span {
        font-size: 28px;
        color: #fff;
      }
    }
    .fixed-search-input {
      width: 700px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .fixed-search-btn {
      height: 40px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
