<template>
  <div class="content2">
    <hr />
    <form action="" method="get">
      <div class="reg">
        <span class="title">注册用户</span><br />

        <div class="form-item">
          <span class="form-lable tel">手机号</span>
          <div class="mobile-area">
            <span class="text" title="中国大陆">中国大陆</span>
            <span class="code">+86</span>
          </div>
          <input
            type="text"
            name="tls"
            class="tls"
            placeholder="请输入你的手机号码"
            @blur="checktel()"
            v-model="vmodel_phone"
          />
          <span v-show="vshow_phone" class="form-lable msgbox tel">{{
            msgtel
          }}</span>
        </div>
        <div class="form-item">
          <span class="form-lable user">用户名</span>
          <input
            type="text"
            name="username"
            class="username"
            id="username"
            placeholder="请设置用户名"
            @blur="checkname()"
            v-model="vmodel_username"
          />
          <span v-show="vshow_username" class="form-lable msgbox">{{
            msgname
          }}</span>
        </div>
        <div class="form-item">
          <span class="form-lable pwd">密码</span>
          <input
            type="password"
            name="userpwd"
            class="userpwd"
            id="userpwd"
            placeholder="请设置密码"
            @blur="checkpassword()"
            v-model="vmodel_password"
          />
          <span v-show="vshow_pwd" class="form-lable msgbox">{{
            msgpassword
          }}</span>
        </div>
        <div class="form-item">
          <span class="form-lable pwd2">确认密码</span>
          <input
            type="password"
            name="userpwd2"
            class="userpwd2"
            id="userpwd2"
            placeholder="请设置密码"
            @blur="checkpassword2()"
            v-model="vmodel_cpwd"
          />
          <span v-show="vshow_cpwd" class="form-lable msgbox">{{
            msgpassword2
          }}</span>
        </div>
        <button
          type="submit"
          class="submit2"
          id="submit2"
          @click="register($event)"
        >
          注册
        </button>
      </div>
    </form>

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
export default {
  data() {
    return {
      tel: "",
      name: "",
      password: "",
      password2: "",

      vshow_phone: false,
      vshow_username: false,
      vshow_pwd: false,
      vshow_cpwd: false,

      msgtel: "",
      msgname: "",
      msgpassword: "",
      msgpassword2: "",

      vmodel_phone: "",
      vmodel_username: "",
      vmodel_password: "",
      vmodel_cpwd: "",

      content: "",
      link: "",
      dialogVisible: false
    };
  },
  components: {
    Dialog
  },
  methods: {
    init() {
      this.vmodel_phone = "";
      this.vmodel_username = "";
      this.vmodel_password = "";
      this.vmodel_cpwd = "";
    },
    checktel: function() {
      var re_phone = /^1[3-9]\d{9}$/;
      if (re_phone.test(this.vmodel_phone)) {
        this.vshow_phone = false;
      } else {
        this.msgtel = "请输入正确的手机号码";
        this.vshow_phone = true;
      }
    },
    checkname: function() {
      var re_username = /^[a-zA-Z0-9_-]{5,20}$/;
      if (re_username.test(this.vmodel_username)) {
        this.vshow_username = false;
      } else {
        this.msgname = "由数字字母下划线组成，长度不小于5";
        this.vshow_username = true;
      }
    },
    checkpassword: function() {
      var re_pwd = /^[0-9A-Za-z]{8,20}$/;
      if (re_pwd.test(this.vmodel_password)) {
        this.vshow_pwd = false;
      } else {
        this.msgpassword = "由数字字母组成，长度不小于8";
        this.vshow_pwd = true;
      }
    },
    checkpassword2: function() {
      if (this.vmodel_password == this.vmodel_cpwd) {
        this.vshow_cpwd = false;
      } else {
        this.msgpassword2 = "密码不一样";
        this.vshow_cpwd = true;
      }
    },
    registerInit() {
      this.checktel();
      this.checkname();
      this.checkpassword();
      this.checkpassword2();
    },
    register: function(event) {
      event.preventDefault();
      this.registerInit();
      if (
        !this.vshow_phone &&
        !this.vshow_username &&
        !this.vshow_pwd &&
        !this.vshow_cpwd
      ) {
        const userInfo = {
          username: this.vmodel_username,
          tel: this.vmodel_phone,
          password: this.vmodel_password
        };
        axios
          .post("http://127.0.0.1:12315/api/register", Qs.stringify(userInfo))
          .then(response => {
            if (response.data.state == 400) {
              this.alertDialog(response.data.success, "", true);
              return;
            }
            this.alertDialog(response.data.success, "/Login", true);
          })
          .catch(function(error) {
            window.console.log(error);
          });
      }
    },
    alertDialog(content, link, dialog) {
      this.content = content;
      this.link = link;
      this.dialogVisible = dialog;
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
  color: #3c3c3c;
  font: 400 12px/1.6 arial, "Hiragino Sans GB", \5b8b\4f53, sans-serif;
}
.content2 {
  width: 1024px;
  margin: 0 auto;
}
.title {
  margin-left: 470px;
  display: inline;
  text-align: center;
  color: #3e3e3e;
  display: inline;
  line-height: 46px;
  font-size: 20px;
  font-weight: 700;
  font-family: "\5FAE\8F6F\96C5\9ED1", "\534E\6587\7EC6\9ED1", "\9ED1\4F53",
    arial;
}
hr {
  color: #999;
}
.reg {
  margin: 0 auto;
  margin: 0 auto;
  height: 400px;
  margin-top: 30px;
}
.tel {
  margin-top: 30px;
}
.msgbox {
  margin-left: 10px;
  color: #f40;
}

.form-item {
  padding: 10px 0 10px 350px;
  line-height: 36px;
  zoom: 1;
}
.form-lable {
  font-size: 14px;
  text-align: center;
  float: left;
  height: 37px;
  line-height: 37px;
  padding: 0 20px 0 0;
}
.form-item:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
.code {
  float: right;
  margin-right: 10px;
}
.text {
  float: left;
  width: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 35px;
}
.mobile-area {
  width: 150px;
  display: inline-block;
  line-height: 35px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: 0;
  position: relative;
  cursor: pointer;
  float: left;
  padding-left: 10px;
  height: 35px;
  font-weight: 700;
  overflow: hidden;
  margin-top: 30px;
}
.tls {
  width: 140px;
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  padding: 9px;
  border: 1px solid #dedede;
  margin-top: 30px;
  float: left;
}
.username,
.userpwd,
.userpwd2 {
  width: 290px;
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  padding: 9px;
  border: 1px solid #dedede;
  float: left;
}
.pwd {
  margin-right: 13px;
}
.pwd2 {
  margin-left: -14px;
}
.submit2 {
  margin: 0 auto;
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
  margin-left: 410px;
}
</style>
