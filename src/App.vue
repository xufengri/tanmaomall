<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "./axios";
import { mapMutations } from "vuex";
export default {
  name: "app",
  components: {},
  mounted() {
    axios.post("http://127.0.0.1:12315/api/login").then(res => {
      window.console.log(res);
      const username = res.data.data && res.data.data.username;
      this.loginUserInfo({ username });
    });
  },
  methods: {
    ...mapMutations("userInfo", ["loginUserInfo"])
  }
};
</script>

<style></style>
