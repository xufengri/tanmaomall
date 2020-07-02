<template>
  <div class="shop-footer">
    <div class="footer-content">
      <div class="top"></div>
      <div class="middle">
        <dl class="guide" v-for="(item, index) in guideList" :key="index">
          <dt class="guide-title">{{ item.title }}</dt>
          <dd class="guide-content">
            <a v-for="(e, num) in item.content" :key="num" href="#">{{ e }}</a>
          </dd>
        </dl>
      </div>
      <div class="bottom">
        <div class="recommend">
          此网站由xxx小组编写，如有侵权请联系：xxxxxxxxx
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guideList: [
        {
          title: "购物指南",
          content: ["免费注册"]
        },
        {
          title: "xx保障",
          content: ["发票保障", "售后规则", "缺货赔付"]
        },
        {
          title: "支付方式",
          content: ["快捷支付", "信用卡", "支付宝", "微信"]
        },
        {
          title: "商家服务",
          content: ["xx规则", "商家入驻", "商家中心", "物流服务", "运营服务"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/public/footer/footer.scss";
</style>
