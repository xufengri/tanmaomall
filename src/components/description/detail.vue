<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="商品详情" name="first">暂无此商品的详情</el-tab-pane>
    <el-tab-pane label="评价" name="second">
      <table class="detail">
        <tbody v-if="commodityDetail.length">
          <tr
            v-for="(item, index) in commodityDetail[commodityDetailNum]"
            :key="index"
          >
            <td class="col-master">
              <div class="rate-content">{{ item.rateContent }}</div>
              <div class="rate-data">{{ item.rateDate }}</div>
            </td>
            <td class="col-meta">
              <div class="rate-sku">
                <p>{{ item.auctionSku.split(";")[0] }}</p>
                <p>{{ item.auctionSku.split(";")[1] }}</p>
                <p>{{ item.auctionSku.split(";")[2] }}</p>
              </div>
            </td>
            <td class="col-author">
              <div class="rate-user-info">
                {{ item.displayUserNick }}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          暂无买家评论哦！
        </tbody>
      </table>
      <el-pagination
        v-if="commodityDetail.length"
        background
        layout="prev, pager, next"
        @current-change="pager"
        :total="commodityDetail.length * 10"
        class="turn-page"
      >
      </el-pagination>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: ["commodityDetail"],
  data() {
    return {
      activeName: "first",
      commodityDetailNum: 0
    };
  },
  methods: {
    pager(currentPage) {
      window.console.log(currentPage);
      this.commodityDetailNum = currentPage - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/description/detail.scss";
</style>
