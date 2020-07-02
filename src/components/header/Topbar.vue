<template>
  <div class="topbar">
    <el-row class="content">
      <el-col :span="16">
        <el-col :span="3">
          <div class="home" @click="toIndex">
            <i class="el-icon-s-home"></i>
            <span>天猫首页</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="welcome" v-if="info">{{ info }}</div>
          <div class="welcome" v-else>喵，欢迎来天猫</div>
        </el-col>
        <el-col :span="2" v-if="!info">
          <div class="login" @click="toLogin">
            请登录
          </div>
        </el-col>
        <el-col :span="2" v-if="!info">
          <div class="register" @click="toRegister">
            免费注册
          </div>
        </el-col>
        <el-col :span="2" v-if="info">
          <div class="cancellation" @click="cancellation">
            退出登录
          </div>
        </el-col>
      </el-col>
      <el-col :span="8">
        <my-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyNav from "./nav";
import { mapGetters } from "vuex";
export default {
  components: {
    MyNav
  },
  computed: {
    ...mapGetters("userInfo", ["info"])
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: "/Login"
      });
    },
    toRegister() {
      this.$router.push({
        path: "/Register"
      });
    },
    toIndex() {
      this.$router.push({
        path: "/index"
      });
    },
    cancellation() {
      this.$store.commit("userInfo/cancellation");
      this.setCookie("at_user", "", "-1");
    },
    setCookie: function(name, value, time) {
      document.cookie = name + "=" + value + ";max-age=" + time;
      return this;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/public/header/topbar.scss";
</style>
