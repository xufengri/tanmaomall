import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/assets/css/main.css";
import "@/assets/font_1jp85dhxpde/iconfont.css";
import "@/assets/font_1jp85dhxpde/iconfont.js";

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   window.console.log(to);
//   const userInfo = store.state["userInfo"].userInfo;
//   if (userInfo.username) {
//     next();
//   } else {
//     if (to.path == "/index" || to.path == "/Login" || to.path == "/Register") {
//       next();
//     } else {
//       window.alert("您还没有登录，请前往登录");
//       next("/Login");
//     }
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
