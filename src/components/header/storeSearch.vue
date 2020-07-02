<template>
  <div class="search">
    <el-row class="search-container">
      <el-col :span="3" class="logo">
        <a href="#">
          <i class="logoPic"></i>
        </a>
      </el-col>
      <span class="parting-line"></span>
      <el-col :span="3" class="store-name">{{ storeName }}</el-col>
      <span class="parting-line"></span>
      <el-col :span="6" class="mobile-client">
        <span class="mobile">
          手机端
          <i class="el-icon-arrow-down"></i>
          <div class="QR-code">
            <img
              width="140"
              src="//gcodex.alicdn.com/qrcode.do?biz_code=tmallpc&content=http%3A%2F%2Fm.laiwang.com%2Fmarket%2Flaiwang%2Ftmall%2Fapp-download.php%3F%26type%3Dshop%26biz%3Dtmall%26iframe%3D1%26mmstat%3Dshop_head%26key%3D57302891&size=175&margin=0&logo_url=http%3A%2F%2Fimg.alicdn.com%2Ftfs%2FTB1prMSRXXXXXcCXFXXXXXXXXXX-198-198.png&channel_id=2703"
              data-spm-anchor-id="a220o.1000855.0.i4.262f590fBTviIz"
            />
          </div>
        </span>
      </el-col>
      <el-col :span="10" class="input-content">
        <el-input class="search-input" placeholder="请输入内容"></el-input>
        <el-button type="primary" class="search-btn">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["storeName"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/public/header/storeSearch.scss";
</style>
