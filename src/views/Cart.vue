<template>
  <div class="cart">
    <trolley v-if="!cartArray.length" />
    <shopping-cart :cart="cartArray" v-else />
  </div>
</template>

<script>
import Trolley from "../components/cart/Trooley";
import ShoppingCart from "../components/cart/shoppingCart";
import axios from "../axios";
export default {
  data() {
    return {
      cartArray: []
    };
  },
  created() {
    axios.get("http://127.0.0.1:12315/api/getCart").then(res => {
      window.console.log(res);
      this.cartArray = res.data.data;
    });
  },
  components: {
    Trolley,
    ShoppingCart
  }
};
</script>

<style scoped>
.cart {
  margin: 50px 0;
}
</style>
