<template>
  <div class="content">
    <div class="box">
      <div class="bg"></div>
      <div class="login-box-warp">
        <div class="login-box">
          <div v-if="!loginError" class="login-title">密码登录</div>
          <div v-else class="login-error">
            <i class="el-icon-remove"></i>
            <p class="error-text">{{ errorText }}</p>
          </div>
          <div id="J_Form">
            <!-- 用户名  -->
            <div class="field">
              <label class="labal-bg">
                <i class="iconfont icon-tubiao211" title="会员名"></i
              ></label>
              <input
                type="text"
                id="username_1"
                class="login-text UserName"
                placeholder="会员名/邮箱/手机号"
                v-model="userName"
              />
            </div>
            <!-- 密码 -->
            <div class="field">
              <label class="labal-bg">
                <i class="iconfont icon-mima" title="密码"></i
              ></label>
              <input
                type="text"
                id="userpwd_1"
                class="login-text UserPwd"
                v-model="userPwd"
              />
            </div>
            <button @click="Login" class="submit" id="submit">登 录</button>

            <ul class="login-way">
              <li class="weibo">
                <i class="iconfont icon-weibo" title="微博"></i>微博登录
              </li>
              <li class="alipay">
                <i class="iconfont icon-zhifubao" title="支付宝"></i>支付宝登录
              </li>
            </ul>

            <div class="login-links">
              <a href="#" class="forget-pwd">忘记密码</a>
              <a href="#">忘记会员名</a>
              <a href="#" class="register">免费注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog
      :content="content"
      :link="link"
      :dialogVisible.sync="dialogVisible"
    />
  </div>
</template>

<script>
import axios from "../axios";
import Qs from "qs";
import Dialog from "../components/dialog/index.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      dialogVisible: false,
      content: "",
      link: "",
      loginError: false,
      errorText: ""
    };
  },
  components: {
    Dialog
  },
  methods: {
    ...mapMutations("userInfo", ["loginUserInfo"]),
    Login() {
      const userInfo = {
        username: this.userName,
        password: this.userPwd
      };
      axios
        .post("http://127.0.0.1:12315/api/login", Qs.stringify(userInfo))
        .then(response => {
          window.console.log(response);
          const success = response.data.success;
          if (response.data.state == 400) {
            this.alertDialog(success, "", true);
            this.errorText = success;
            return;
          }
          this.alertDialog(success, "/index", true);
          this.loginUserInfo({ username: response.data.data.username });
          this.setCookie(
            "at_user",
            response.data.data.atoken,
            new Date(new Date().getTime() + 1000 * 24 * 60 * 60).toGMTString()
          );
        })
        .catch(function(error) {
          window.console.log(error);
        });
    },
    setCookie: function(name, value, time) {
      document.cookie = name + "=" + value + ";max-age=" + time;
      return this;
    },
    againstLogin() {
      this.userPwd = "";
      this.loginError = true;
    },
    alertDialog(content, link, dialog) {
      this.content = content;
      this.link = link;
      this.dialogVisible = dialog;
      if (!link) {
        this.againstLogin();
      }
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  font: 12px/1.5 "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB",
    "\5b8b\4f53", sans-serif;
}
.box {
  width: 100%;
  height: 600px;
  background-color: #999;
}

.login-box-warp {
  position: absolute;
  top: 120px;
  right: 60px;
  width: 350px;
}
.login-box {
  width: 300px;
  height: 300px;
  padding: 25px 25px 23px;
  color: #6c6c6c;
  background: #fff;
  position: relative;
  margin: 0 auto;
}
.login-title {
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  color: #3c3c3c;
  margin-top: 9px;
  padding-bottom: 8px;
  font-weight: 700;
}
.login-error {
  width: 278px;
  height: auto;
  line-height: 16px;
  padding: 6px 10px;
  border: 1px solid #f40;
}
.login-error i {
  font-size: 16px;
  padding-right: 10px;
  color: #f40;
}
.login-error .error-text {
  width: 240px;
  display: inline-block;
}
.field {
  margin-top: 20px;
  position: relative;
}
.static-form .field .ph-label {
  position: absolute;
  line-height: 42px;
  height: 42px;
  color: #999;
  opacity: 1;
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-out;
  left: 50px;
  top: 0;
  font-size: 14px;
}
.login-box-warp .login-box {
  background-color: rgba(255, 255, 255, 0.9);
}
.labal-bg {
  line-height: 40px;
  text-align: center;
  float: left;
  width: 40px;
  height: 40px;
  background-color: #ddd;
  position: absolute;
  left: 1px;
  top: 1px;
}
.login-text {
  width: 240px;
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  padding: 11px 8px 11px 50px;
  border: 1px solid #ddd;
}
.submit {
  width: 300px;
  border: 0;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  line-height: 42px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: #f40;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
}
.login-way {
  margin-top: 20px;
}
li {
  list-style: none;
  color: #6c6c6c;
  margin-right: 20px;
  display: inline-block;
}
a {
  text-decoration: none;
  color: #6c6c6c;
}
.login-links {
  margin-top: 25px;
  overflow: hidden;
  text-align: right;
}
.login-links a {
  margin-right: 10px;
}
.bg {
  background-image: url(https://img.alicdn.com/tfs/TB1plJ.mYY1gK0jSZTEXXXDQVXa-2500-600.jpg);
  height: 600px;
  background-position: center center;
}

.icon-tubiao211,
.icon-mima {
  color: #fff;
  font-size: 22px;
}
.icon-zhifubao {
  font-size: 16px;
  color: #1ba9ee;
  margin-right: 1px;
}
.icon-weibo {
  color: #e52425;
  font-size: 16px;
}
</style>
