<template>
  <div class="show-page">
    <div class="left">
      <img
        v-if="imgarr.length"
        @click="handleClick(imgarr[0].produceId)"
        :src="imgarr[0].cover"
        alt=""
      />
    </div>
    <div class="right" v-if="imgaa">
      <div
        v-for="(item, index) in imgaa"
        :key="index"
        @click="handleClick(item.produceId)"
        class="r-shop"
      >
        <img class="r-pic" :src="item.cover" alt="" />
        <p class="r-title">{{ item.produceName }}</p>
        <p class="r-price">￥{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";

export default {
  data() {
    return {
      imgarr: [],
      imgaa: []
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:12315/getProduceList?offset=0&limit=7")
      .then(res => {
        window.console.log(res.data.rows);
        this.imgarr = res.data.rows;
        this.imgarr.forEach((ele, index) => {
          if (index == 0) {
            return;
          }
          this.imgaa.push({
            cover: ele.cover,
            produceName: ele.produceName,
            price: ele.price,
            produceId: ele.produceId
          });
        });
      });
  },
  methods: {
    handleClick(produceId) {
      this.$router.push({
        path: "/Description",
        query: { produceId }
      });
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss">
.show-page {
  display: flex;
  width: 1190px;
  height: 500px;
  box-sizing: border-box;
  .left {
    width: 240px;
    height: 500px;
    background-color: yellow;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .right {
    width: 950px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    .r-shop {
      width: 310px;
      height: 240px;
      background-color: #fff;
      cursor: pointer;
      .r-pic {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        height: 160px;
      }
      .r-title {
        padding: 0 10px;
        font-size: 14px;
        color: #000;
      }
      .r-price {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        color: #f00;
        padding: 8px;
      }
    }
  }
}
</style>
