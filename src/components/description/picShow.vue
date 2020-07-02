<template>
  <el-col :span="9" class="commodity-left">
    <div class="shops-picture" v-if="shopsPictureList">
      <el-image
        class="shops-picture-img"
        :src="shopsPictureList[jSelected]"
        :preview-src-list="shopsPictureList"
      >
        >
      </el-image>
    </div>
    <div class="shops-picture-menu">
      <ul class="menu" v-if="shopsPictureList">
        <li
          class="menu-item"
          @mouseover="handleclick(index)"
          :class="{ 'j-select': jSelected === index }"
          v-for="(item, index) in shopsPictureList"
          :key="index"
        >
          <a href="#" class="item-pic">
            <img class="item-pic-img" :src="item" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
export default {
  props: ["shopsPictureList"],
  data() {
    return {
      jSelected: 0
    };
  },
  methods: {
    // 图片展示下方的图片目录，当鼠标放在其中图片时，上方大图切换成这张图片
    handleclick(i) {
      this.jSelected = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/description/picShow.scss";
</style>
